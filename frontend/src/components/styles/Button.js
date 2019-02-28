import styled from 'styled-components'

const Button = styled.button`
  background: black;
  color: white;
  border: none;
  border-radius: ${props => props.theme.radius};
  padding: 1em 2em;
  text-transform: uppercase;
`

export default Button
