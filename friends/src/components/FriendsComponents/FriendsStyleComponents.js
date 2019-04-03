import styled from 'styled-components'
import { color, colorScheme, fontSizing, flex } from '../StyleComponents/theme'

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


`

export const Preview = styled.div`
  width: 90%;
  min-width: 300px;
  ${flex('column', 'flex-start', 'center')}
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
  min-width: 250px;
  margin: 5px 0;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 
  0 7px 20px 0 rgba(0, 0, 0, 0.17);
  background: ${color.lightText};

  h3 {
    font-size: ${fontSizing.s};
    font-weight: bold;
    color: ${colorScheme.headingColor};
  }

  p {
    font-size: ${fontSizing.xs};
  }

  .stat-category {
    font-weight: bold;
  }

  & a {
    text-decoration: none;
    color: ${colorScheme.defaultFontColor}
  }


`


