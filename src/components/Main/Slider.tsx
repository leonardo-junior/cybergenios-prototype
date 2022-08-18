// vendors
import styled from 'styled-components'

// components
import Button from '../common/Button'
import Card from './Card'
import Iconify from '../common/Iconify'
import Paragraph from '../common/Paragraph'
import Title from '../common/Title'

// api
import carList from '../../api/carList'

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

type SliderProps = {
  scrollRight: () => void
  scrollLeft: () => void
  pickPosition: number
  sliderRef: React.RefObject<HTMLUListElement>
  itemsMargin: number
}

function Slider ({ scrollRight, scrollLeft, pickPosition, itemsMargin, sliderRef }: SliderProps): JSX.Element {
  return (
    <>
      <Div>
        <IconButton onClick={scrollLeft}>
          <Iconify src="bi:chevron-left" fontSize={3} color="#AFAFAF" hoverColor="#1D2527" />
        </IconButton>

        <Ul ref={sliderRef}>
          {carList.map(({ src, name, year, velocity, economy, userRating }, index ) => {
            return (
              <li key={index}>
                <Card margin={itemsMargin}>
                  <img src={src} alt={name} />

                  <Title size="H2">Mustang</Title>

                  <section>
                    <Paragraph size={'SM'}>
                      <Iconify src="bi:calendar2-date"
                        fontSize={1.625}
                        bg="transparent"
                        color="#1D2527"
                    />

                      {year}
                    </Paragraph>

                    <Paragraph size={'SM'}>
                      <Iconify src="fluent:top-speed-20-regular"
                        fontSize={1.625}
                        bg="transparent"
                        color="#1D2527"
                      />

                      {velocity}
                    </Paragraph>
                    <Paragraph size={'SM'}>
                      <Iconify src="simple-line-icons:energy"
                        fontSize={1.625}
                        bg="transparent"
                        color="#1D2527"
                      />

                      {economy}
                    </Paragraph>
                    <Paragraph size={'SM'}>
                      <Iconify src="fluent:people-20-regular"
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
