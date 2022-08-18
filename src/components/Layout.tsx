// vendors
import styled from 'styled-components'
import Navbar from './Header/Navbar'

const Div = styled.div`
  div {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 5rem);
  }
`

type LayoutProps = {
  children: React.ReactNode
}

function Layout ({ children }: LayoutProps): JSX.Element {
  return (
    <Div>
      <Navbar />

      <div>{children}</div>
    </Div>
  )
}

export default Layout
