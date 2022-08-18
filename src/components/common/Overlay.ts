// vendors
import styled from 'styled-components'

type OverlayProps = {
  open: boolean | null
}

const Overlay = styled.div<OverlayProps>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: #28282810;
`

export default Overlay
