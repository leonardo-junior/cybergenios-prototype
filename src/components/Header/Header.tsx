// vendors
import styled from 'styled-components'

// components
import Navbar from './Navbar'

const HeaderStyled = styled.header`
  img {
    width: 100%;
    object-fit: cover;
    min-height: 13rem;
  }
`

function Header (): JSX.Element {
  return (
    <HeaderStyled>
      <img src="/car-banner-1.png" alt="car-image" />

      <Navbar />
    </HeaderStyled>
  )
}

export default Header
