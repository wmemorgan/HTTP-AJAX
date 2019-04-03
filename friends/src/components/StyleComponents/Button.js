import styled, { css } from 'styled-components'
import { color, fontSizing, breakpoints } from './theme'

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 25px;
  color: ${color.lightText};
  background: ${color.accent};
  font-size: ${fontSizing.s};
  font-weight: bold;
  cursor: pointer;

  @media ${breakpoints[0]} {
    font-size: ${fontSizing.xs}
  }

  ${props =>
    props.primary &&
    css`
      background: ${color.primaryColor}; 
  `}

  ${props =>
    props.delete &&
    css`
      background: ${color.danger}; 
  `}

  ${props =>
    props.cta &&
    css`
      background: ${color.accent}; 
  `}
`

export default Button