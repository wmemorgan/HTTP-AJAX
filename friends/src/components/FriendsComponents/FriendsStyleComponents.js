import styled from 'styled-components'
import { color, colorScheme, fontSizing, 
  flex, breakpoints } from '../StyleComponents/theme'

export const FriendsListContainer = styled.div`
  width: 90%;
  ${flex('column','center','center')}
  max-width: 600px;
  padding: 20px 10px;
  background: ${color.lightText};
  font-size: ${fontSizing.sm};

  a {
    text-decoration: none;
    color: ${colorScheme.defaultFontColor};
  }

  @media ${breakpoints[0]} {
    h1 {
      font-size: ${fontSizing.m};
    }
  }


`

export const Preview = styled.div`
  width: 90%;
  min-width: 300px;
  ${flex('row', 'center', 'space-between')}
  margin: 10px 0;
  padding: 10px;
  border: 0.5px solid ${color.primaryBgShading};
  box-shadow:  5px 5px 5px 0px rgba(89,89,89,1);
  background: ${color.primaryBgShading};
  cursor: pointer;

  &:hover {
    color: ${color.lightText};
    background: ${colorScheme.defaultFontColor};
  } 


`

export const FriendInfoContainer = styled.div`
  ${flex('column','flex-start','center')}
  width: 80%;
  min-width: 300px;
  margin: 20px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow:  10px 10px 5px 0px rgba(0,0,0,0.75);
  background: ${color.lightText};

  h3 {
    margin: 5px 0;
    font-size: ${fontSizing.s};
    font-weight: bold;
    color: ${colorScheme.headingColor};
  }

  p {
    font-size: ${fontSizing.xs};
    margin: 5px 0;
  }

  .stat-category {
    font-weight: bold;
  }

  button {
    width: 100px;
    align-self: center;
    margin-top: 20px;
  }


`


