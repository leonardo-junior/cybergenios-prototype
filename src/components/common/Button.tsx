// vendors
import styled from 'styled-components'

type ButtonStyledProps = {
  norm: 'primary' | 'secondary'
  size: 'MD' | 'SM'
}

const type = {
  primary: {
    color: '#1D2527',
    bg: 'transparent',
  },
  secondary: {
    color: '#EBEFF2',
    bg: '#1D2527',
  },
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2.5rem;
  border: solid 1px #1d2527;
  line-height: 2rem;
  border-radius: 1.5rem;
  background-color: ${({ norm }) => type[norm].bg};
  color: ${({ norm }) => type[norm].color};
  font-size: ${({ size }) => `${size === 'SM' ? 1 : 1.25}rem`};
  font-weight: 500;
`

type ButtonProps = ButtonStyledProps & {
  text: string
}

function Button ({ text, norm, size }: ButtonProps): JSX.Element {
  return (
    <ButtonStyled norm={norm} size={size}>
      {text}
    </ButtonStyled>
  )
}

export default Button
