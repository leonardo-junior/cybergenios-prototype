// vendors
import styled from 'styled-components'

// components
import Button from './Button'
import Paragraph from '../../common/Paragraph'
import Title from '../../common/Title'

const Section = styled.section`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    position: relative;
    margin: 0;
    overflow: hidden;

    img {
      object-fit: cover;
      min-height: 23rem;
      min-width: 100%;
    }

    article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      flex: 1;
      position: absolute;
      top: 0;
      right: 0;
      padding: 1rem 2rem 1rem 0;
      height: 100%;
      width: 50%;
      min-width: 35rem;
      color: white;
      text-align: end;
      background: linear-gradient(
        250deg,
        rgb(50 40 40 / 60%) 0%,
        rgba(29, 37, 39, 0.6) 24.79%,
        rgba(29, 37, 39, 0.534) 54.48%,
        rgba(29, 37, 39, 0.006) 78.67%,
        rgb(96 98 98 / 0%) 80%
      );
      backdrop-filter: blur(1px);
    }

    h1 {
      margin: 0;
    }

    p {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font-weight: 300;
      line-height: 2rem;
    }

    button {
      padding: 0.5rem 5rem;
      margin: 0;
    }
  }

  @media screen and (min-width: 1080px) {
    article {
      padding: 4rem;
    }

    p {
      line-height: 2.5rem;
    }

    button {
      padding: 0.75rem 6rem;
      margin: 1rem 0;
    }
  }
`

function DesktopAbout (): JSX.Element {
  return (
    <>
      <Section>
        <img src="/car-banner-3.png" alt="carr" />

        <article>
          <Title>Mustang</Title>

          <Paragraph size="MD">
            O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. O carro foi
            apresentado ao público em 17 de abril de 1964 durante a New York World's Fair. O Mustang, apesar
            de ter sofrido grandes alterações ao longo dos anos é a mais antiga linha de automóveis da Ford.
          </Paragraph>

          <Button>Ver Carros</Button>
        </article>
      </Section>
    </>
  )
}

export default DesktopAbout
