// vendors
import styled from 'styled-components'

// components
import AboutButton from '../../common/AboutButton'
import Paragraph from '../../common/Paragraph'
import Title from '../../common/Title'

const Section = styled.section`
  position: relative;
  margin: 0;
  filter: drop-shadow(0px -3px 13px rgba(0, 0, 0, 0.15));

  img {
    width: 100%;
    max-width: 1680px;
  }

  article {
    background: linear-gradient( 269deg,
      rgb(0 0 0 / 30%) 25%,15.42%,
      rgb(14 14 14 / 31%) 50%,35.73%,
      rgb(0 0 0 / 28%) 75%,78.67%,
      rgb(40 40 40 / 29%) 100%
    );
    backdrop-filter: blur(1px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: end;
    position: absolute;
    padding: 1rem 2rem 0 2.25rem;
    top: 1rem;
    color: white;
    width: 100%;
    min-height: 50%;

    h1 {
      margin: 0.25rem 0;
    }

    p {
      display: flex;
      max-width: 25rem;
      font-weight: 300;
      flex-direction: column;
      align-items: flex-end;
      line-height: 2rem;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

function MobileAbout (): JSX.Element {
  return (
    <>
      <Section>
        <img src="/car-banner-2.png" alt="carr" />

        <article>
          <Title>O que são</Title>

          <Paragraph size="MD">
            A sigla SUV significa Sport Utility Vehicle -- ou seja, veículo utilitário esportivo. As SUVs
            costumam ter porte avantajado, além de interior espaçoso e possibilidade de trafegar dentro e fora
            da cidade.
          </Paragraph>

          <AboutButton>Ver Carros</AboutButton>
        </article>
      </Section>
    </>
  )
}

export default MobileAbout
