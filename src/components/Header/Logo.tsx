// vendors
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  margin: 0.25rem;

  span {
    width: 1.5rem;
    min-width: 1.5rem;
    height: 1.5rem;
    background-color: #282828;

    :nth-child(1),
    :nth-child(4) {
      background-color: white;
    }

    @media screen and (min-width: 768px) {
      background-color: white;

      :nth-child(1),
      :nth-child(4) {
        background-color: #282828;
      }
    }
  }
`

function Logo (): JSX.Element {
  return (
    <Div>
      <span />
      <span />
      <span />
      <span />
    </Div>
  )
}

export default Logo
