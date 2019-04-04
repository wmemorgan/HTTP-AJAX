import styled from 'styled-components'
import { colorScheme, fontSizing, 
  breakpoints, flex } from './StyleComponents/theme'

export const HeaderContainer = styled.header`
  width: 100%;
  ${flex('column','center')};
  padding: 20px 10px;
  top: 0;
  z-index: 5;

  background: ${colorScheme.headerBgColor};

  & * {
    color: ${colorScheme.headerFontColor};
    font-size: ${fontSizing.s};
  }

`

export const Nav = styled.nav`
  border: 1px solid red;
  width: 90%;
  max-width: 600px;
  ${flex('row','center','space-between')}

  & * {
    text-decoration: none;
  }

  @media ${breakpoints[0]} {
    width: 100%;
    display: ${props => props.show ? 'flex': 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & a {
      width: 100%;
      padding: 10px;
      border-top: 1px solid ${colorScheme.defaultBorderColor};

      a:first-child {
        border-top: none;
      }
    }
  }

`

export default HeaderContainer