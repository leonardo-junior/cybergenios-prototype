// vendors
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

// components
import Hamburger from './Hamburger'
import Iconify from '../common/Iconify'
import Logo from './Logo'
import Overlay from '../common/Overlay'

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  z-index: 1;
`

type DivProps = {
  open: boolean | null
}

const Div = styled.div<DivProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  color: #282828;
  background-color: white;
  height: 100vh;
  width: 17rem;
  border-radius: 0 1.5rem 1.5rem 0;
  box-shadow: 3px 0px 9px 0px #00000026;
  margin: 0;
  padding: 2.25rem 1.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;

  ul {
    margin-top: 1.25rem;
    padding: 0;

    li {
      margin: 2.25rem 0;

      :first-child {
        text-decoration: underline;
      }

      svg {
        display: none;
      }
    }
  }

  @media screen and (max-width: 767px) {
    transform: translateX(-100%);
    transform: ${({ open }) => open && 'translateX(0%)'};
    animation: ${({ open }) => (open === true ? openMobile : open === false ? closeMobile : null)} 300ms
      normal forwards ease-in-out;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    position: absolute;
    height: 5rem;
    color: #ebeff2;
    flex-direction: row;
    background-color: transparent;
    padding: 3rem 2rem;

    div {
      margin-right: 5rem;
    }

    ul {
      display: flex;
      justify-content: space-around;
      flex: 1;
      margin: 0 0 0 auto;

      li {
        display: flex;
        align-items: center;
        margin: 0;

        :first-child {
          text-decoration: none;
        }

        &:hover {
          text-decoration: underline;
        }

        svg {
          font-size: 1.5rem;
          margin-left: 1rem;
          display: block;
        }
      }
    }
  }
`

const openMobile = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
`

const closeMobile = keyframes`
  0% {
    display: flex;
    transform: translateX(0);
  }

  99% {
    display: flex;
  }

  100% {
    display: none;
    transform: translateX(-100%)
  }
`

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Fale Conosco', href: '/' },
  { text: 'Sobre', href: '/' },
  { text: 'Tabela', href: '/' },
  { text: 'Entrar', href: '/', icon: 'ant-design:user-outlined' },
]

function Navbar (): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean | null>(null)

  function openMobileMenu () {
    setIsOpen(true)

    document.body.classList.add('disable-scroll')
  }

  function closeMobileMenu () {
    setIsOpen(false)

    // For animation
    setTimeout(() => setIsOpen(null), 400)

    document.body.classList.remove('disable-scroll')
  }

  return (
    <>
      <Nav>
        <Hamburger onClick={openMobileMenu} />

        <Overlay open={isOpen} onClick={closeMobileMenu} />

        <Div open={isOpen}>
          <Logo />

          <ul>
            {navItems.map(({ text, href, icon }, index) => {
              return (
                <li key={index}>
                  <a href={href}>{text}</a>

                  {icon && <Iconify src={icon} />}
                </li>
              )
            })}
          </ul>
        </Div>
      </Nav>
    </>
  )
}

export default Navbar
