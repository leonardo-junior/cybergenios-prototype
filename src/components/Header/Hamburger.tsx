// vendors
import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  width: 3rem;
  height: 1.75rem;
  margin: 0 1.25rem;
  padding: 0 0.5rem;

  span {
    width: 2rem;
    height: 0.25rem;
    margin: 0;
    padding: 0;
    background-color: #ebeff2;
    border-radius: 5px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

type HamburgerProps = {
  onClick: () => void
}

function Hamburger ({ onClick }: HamburgerProps): JSX.Element {
  return (
    <Button onClick={onClick}>
      <span />
      <span />
      <span />
    </Button>
  )
}

export default Hamburger
