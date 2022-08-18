// vendors
import { Icon } from "@iconify/react";
import styled from "styled-components";

type SpanProps = {
  fontSize?: number
  background?: string
  color?: string
  hoverColor?: string
}

const Span = styled.span<SpanProps>`
  display: flex;

  svg {
    background-color: ${({ background }) => background};
    font-size: ${({ fontSize }) => `${fontSize}rem`};
    color: ${({ color }) => color};

    :hover {
      color: ${({ hoverColor }) => hoverColor};
    }
  }
`

type IconifyProps = {
  src: string
  fontSize?: number
  bg?: string
  color?: string
  hoverColor?: string
}

function Iconify ({ src, fontSize, bg, color, hoverColor }: IconifyProps): JSX.Element {
  return (
    <Span fontSize={fontSize} background={bg} color={color} hoverColor={hoverColor}>
      <Icon icon={src} />
    </Span>
  )
}

export default Iconify
