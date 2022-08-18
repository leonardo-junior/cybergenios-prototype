// vendors
import { useEffect, useRef, useState } from 'react'

// components
import Header from './components/Header/Header'
import Main from './components/Main/Main'
// styles
import GlobalStyle from './styles/global-style'

function App (): JSX.Element {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean | null>(null)
  const [sliderItemsMargin, setSliderItemsMargin] = useState(4)
  const [sliderPickPosition, setSliderPickPosition] = useState(0)

  const sliderRef = useRef<HTMLUListElement>(null)
  const sliderItemWidthRef = useRef(0)
  const numberOfSliderItemsRef = useRef(3)

  // Syncronize item width
  useEffect(() => {
    if (sliderRef.current) {
      const carroselItem = sliderRef.current.firstChild?.firstChild as HTMLDivElement

      if (carroselItem) {
        sliderItemWidthRef.current = carroselItem.offsetWidth
      }
    }
  }, [])

  function handleResizeSlider () {
    const slider = sliderRef.current

    if (slider) {
      const sliderWidth = slider.offsetWidth
      const rem = 16

      const minMarginAceptedBetweenItems = 3 * rem
      const spaceBetweenItems =
        sliderWidth - numberOfSliderItemsRef.current * Math.floor(sliderItemWidthRef.current)
      const isPossibleAddItem =
        minMarginAceptedBetweenItems <
        sliderWidth - (numberOfSliderItemsRef.current + 1) * Math.floor(sliderItemWidthRef.current)

      if (spaceBetweenItems < minMarginAceptedBetweenItems) {
        numberOfSliderItemsRef.current--
      } else if (numberOfSliderItemsRef.current < 3 && isPossibleAddItem) {
        numberOfSliderItemsRef.current++
      }

      const widthItems = numberOfSliderItemsRef.current * Math.floor(sliderItemWidthRef.current)
      const requiredMargin = sliderWidth - widthItems
      const numberOfMarginsToSet = 2 * numberOfSliderItemsRef.current
      const newMargin = requiredMargin / numberOfMarginsToSet / rem

      setSliderItemsMargin(newMargin)
    }
  }

  useEffect(() => {
    handleResizeSlider()
  })

  // Add item resize margin functionality when changing viewport size
  useEffect(() => {
    window.addEventListener('resize', handleResizeSlider)

    return () => {
      window.removeEventListener('resize', handleResizeSlider)
    }
  }, [])

  function openMobileMenu () {
    setIsMenuMobileOpen(true)

    document.body.classList.add('disable-scroll')
  }

  function closeMobileMenu () {
    setIsMenuMobileOpen(false)

    // For animation
    setTimeout(() => setIsMenuMobileOpen(null), 400)

    document.body.classList.remove('disable-scroll')
  }

  function sliderScrollRight () {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current?.offsetWidth
      const sliderScrollSize = sliderRef.current?.scrollWidth - sliderWidth
      const sliderScrolled = sliderRef.current?.scrollLeft + sliderWidth
      const percentScrolled = Math.floor((sliderScrolled / sliderScrollSize) * 10) * 6.5
      const pickPosition = percentScrolled < 65 ? percentScrolled : 65

      sliderRef.current.scrollBy({ left: sliderWidth, top: 0, behavior: 'smooth' })

      setSliderPickPosition(pickPosition)
    }
  }

  function sliderScrollLeft () {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current?.offsetWidth
      const sliderScrollSize = sliderRef.current?.scrollWidth - sliderWidth
      const sliderScrolled = sliderRef.current?.scrollLeft - sliderWidth
      const percentScrolled = Math.floor((sliderScrolled / sliderScrollSize) * 10) * 6.5
      const pickPosition = percentScrolled > 0 ? percentScrolled : 0

      sliderRef.current.scrollBy({ left: sliderWidth * -1, top: 0, behavior: 'smooth' })

      setSliderPickPosition(pickPosition)
    }
  }

  return (
    <>
      <Header isOpen={isMenuMobileOpen} openMobileMenu={openMobileMenu} closeMobileMenu={closeMobileMenu} />

      <Main
        scrollRight={sliderScrollRight}
        scrollLeft={sliderScrollLeft}
        sliderPickPosition={sliderPickPosition}
        sliderRef={sliderRef}
        sliderItemsMargin={sliderItemsMargin}
      />

      <GlobalStyle />
    </>
  )
}

export default App
