// vendors
import styled from 'styled-components'

type H1Props = {
  size?: 'H1' | 'H2'
}

const H1 = styled.h1<H1Props>`
  font-weight: 400;

  font-size: ${(props) => `${props.size === 'H2' ? 1.5 : 2}rem`};

  @media screen and (min-width: 768px) {
    font-size: ${(props) => `${props.size === 'H2' ? 1.5 : 3.5}rem`};
  }
`

type TitleProps = H1Props & {
  children: React.ReactNode
}

function Title ({ size, children }: TitleProps): JSX.Element {
  return <H1 size={size}>{children}</H1>
}

export default Title
