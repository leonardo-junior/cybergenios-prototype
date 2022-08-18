// vendors
import styled from 'styled-components'

type ParagraphStyledProps = {
  size?: 'MD' | 'SM'
}

const ParagraphStyled = styled.p<ParagraphStyledProps>`
  font-size: 1rem;

  @media screen and (min-width: 768px) {
    font-size: ${({ size }) => `${size === 'SM' ? 1 : 1.25}rem`};
  }
`

type ParagraphProps = ParagraphStyledProps & {
  children: React.ReactNode
}

function Paragraph ({ size, children }: ParagraphProps): JSX.Element {
  return <ParagraphStyled size={size}>{children}</ParagraphStyled>
}

export default Paragraph
