import styled from 'styled-components'
import { color, colorScheme, fontSizing, flex } from '../StyleComponents/theme'

export const FriendsListContainer = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 10px;
  background: ${color.lightText};
  & a {
    text-decoration: none;
    color: ${colorScheme.defaultFontColor}
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


