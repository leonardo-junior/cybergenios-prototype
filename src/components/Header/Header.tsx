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

type HeaderProps = {
  isOpen: boolean | null
  openMobileMenu: () => void
  closeMobileMenu: () => void
}

function Header ({ isOpen, openMobileMenu, closeMobileMenu }: HeaderProps): JSX.Element {
  return (
    <HeaderStyled>
      <img src="/car-banner-1.png" alt="car-image" />

      <Navbar isOpen={isOpen} openMobileMenu={openMobileMenu} closeMobileMenu={closeMobileMenu} />
    </HeaderStyled>
  )
}

export default Header
