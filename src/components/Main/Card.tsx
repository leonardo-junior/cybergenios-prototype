// vendors
import styled from 'styled-components'

type DivProps = {
  margin: number
}

const Div = styled.div<DivProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1.5rem 1.75rem;
  color: #1d2527;
  width: 18rem;
  height: 23.5rem;
  border: 1px solid #1d2527;
  border-radius: 1.5rem;
  margin: 7.5rem 1rem 3rem;

  img {
    position: absolute;
    bottom: 21.5rem;
    left: 1rem;
    width: 14.5rem;
  }

  h1 {
    text-align: center;
    margin: 0.75rem auto 0;
  }

  p {
    display: flex;
    align-items: center;
    margin: 1.75rem 0;
    line-height: 1.5rem;

    :last-child {
      margin-bottom: 1.25rem;
    }

    svg {
      margin-right: 1.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 7.5rem ${({ margin }) => `${margin}rem`} 0rem;
  }
`

type CardProps = DivProps & {
  children: React.ReactNode
}

function Card ({ margin, children }: CardProps): JSX.Element {
  return <Div margin={margin}>{children}</Div>
}

export default Card
