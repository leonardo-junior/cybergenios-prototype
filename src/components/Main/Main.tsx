// components
import DesktopAbout from './Abouts/DesktopAbout'
import MobileAbout from './Abouts/MobileAbout'
import Slider from './Slider'

type MainProps = {
  scrollRight: () => void
  scrollLeft: () => void
  sliderPickPosition: number
  sliderRef: React.RefObject<HTMLUListElement>
  sliderItemsMargin: number
}

function Main ({
  scrollRight,
  scrollLeft,
  sliderPickPosition,
  sliderRef,
  sliderItemsMargin,
}: MainProps): JSX.Element {
  return (
    <>
      <Slider
        scrollRight={scrollRight}
        scrollLeft={scrollLeft}
        pickPosition={sliderPickPosition}
        sliderRef={sliderRef}
        itemsMargin={sliderItemsMargin}
      />

      <MobileAbout />

      <DesktopAbout />
    </>
  )
}

export default Main
