// vendors
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

// components
import Button from '../common/Button'
import Iconify from '../common/Iconify'
import Paragraph from '../common/Paragraph'
import Title from '../common/Title'
import Card from './Card'

// resources
import carList from '../../utils/carList'

const Ul = styled.ul`
  display: flex;
  overflow-x: overlay;
  padding: 0;

  @media screen and (min-width: 768px) {
    overflow-x: hidden;
    margin-top: 3.5rem;
  }
`

const Div = styled.div`
  padding: 0;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 0 3rem;
    flex: 1;
  }
`

type SliderPickProps = {
  pickPosition: number
}

const SliderPick = styled.div<SliderPickProps>`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    position: relative;
    width: 17.5rem;
    height: 0.25rem;
    margin: 2rem auto;
    background-color: #d2d4d9;

    div {
      position: absolute;
      top: 0;
      left: ${({ pickPosition: scrollTo }) => `${scrollTo}%`};
      width: 35%;
      height: 100%;
      background-color: #1d2527;
      margin: 0;
    }
  }
`

const IconButton = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    background-color: transparent;
    border: none;
    margin-top: 3.75rem;
  }
`

function Slider (): JSX.Element {
  const [itemsMargin, setItemsMargin] = useState(4)
  const [pickPosition, setPickPosition] = useState(0)

  const ref = useRef<HTMLUListElement>(null)
  const sliderItemWidthRef = useRef(0)
  const numberOfSliderItemsRef = useRef(3)

  // Syncronize item width
  useEffect(() => {
    if (ref.current) {
      const carroselItem = ref.current.firstChild?.firstChild as HTMLDivElement

      if (carroselItem) {
        sliderItemWidthRef.current = carroselItem.offsetWidth
      }
    }
  }, [])

  function handleResizeSlider () {
    const slider = ref.current

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

      setItemsMargin(newMargin)
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

  function scrollRight () {
    if (ref.current) {
      const sliderWidth = ref.current?.offsetWidth
      const sliderScrollSize = ref.current?.scrollWidth - sliderWidth
      const sliderScrolled = ref.current?.scrollLeft + sliderWidth
      const percentScrolled = Math.floor((sliderScrolled / sliderScrollSize) * 10) * 6.5
      const pickPosition = percentScrolled < 65 ? percentScrolled : 65

      ref.current.scrollBy({ left: sliderWidth, top: 0, behavior: 'smooth' })

      setPickPosition(pickPosition)
    }
  }

  function scrollLeft () {
    if (ref.current) {
      const sliderWidth = ref.current?.offsetWidth
      const sliderScrollSize = ref.current?.scrollWidth - sliderWidth
      const sliderScrolled = ref.current?.scrollLeft - sliderWidth
      const percentScrolled = Math.floor((sliderScrolled / sliderScrollSize) * 10) * 6.5
      const pickPosition = percentScrolled > 0 ? percentScrolled : 0

      ref.current.scrollBy({ left: sliderWidth * -1, top: 0, behavior: 'smooth' })

      setPickPosition(pickPosition)
    }
  }

  return (
    <>
      <Div>
        <IconButton onClick={scrollLeft}>
          <Iconify src="bi:chevron-left" fontSize={3} color="#AFAFAF" hoverColor="#1D2527" />
        </IconButton>

        <Ul ref={ref}>
          {carList.map(({ src, name, year, velocity, economy, userRating }, index) => {
            return (
              <li key={index}>
                <Card margin={itemsMargin}>
                  <img src={src} alt={name} />

                  <Title size="H2">Mustang</Title>

                  <section>
                    <Paragraph size={'SM'}>
                      <Iconify src="bi:calendar2-date" fontSize={1.625} bg="transparent" color="#1D2527" />

                      {year}
                    </Paragraph>

                    <Paragraph size={'SM'}>
                      <Iconify
                        src="fluent:top-speed-20-regular"
                        fontSize={1.625}
                        bg="transparent"
                        color="#1D2527"
                      />

                      {velocity}
                    </Paragraph>
                    <Paragraph size={'SM'}>
                      <Iconify
                        src="simple-line-icons:energy"
                        fontSize={1.625}
                        bg="transparent"
                        color="#1D2527"
                      />

                      {economy}
                    </Paragraph>
                    <Paragraph size={'SM'}>
                      <Iconify
                        src="fluent:people-20-regular"
                        fontSize={1.625}
                        bg="transparent"
                        color="#1D2527"
                      />

                      {userRating}
                    </Paragraph>
                  </section>

                  <Button text="Ver carro" norm="primary" size="SM" />
                </Card>
              </li>
            )
          })}
        </Ul>

        <IconButton onClick={scrollRight}>
          <Iconify src="bi:chevron-right" fontSize={3} color="#AFAFAF" hoverColor="#1D2527" />
        </IconButton>
      </Div>

      <SliderPick pickPosition={pickPosition}>
        <div />
      </SliderPick>
    </>
  )
}

export default Slider
