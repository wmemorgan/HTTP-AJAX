import styled from 'styled-components'
import { color, colorScheme, fontSizing } from '../StyleComponents/theme'

export const FriendsListContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const FriendInfoContainer = styled.div`
  width: 48%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 
  0 7px 20px 0 rgba(0, 0, 0, 0.17);

  & * {
    margin: 5px 0;
  }

  h3 {
    font-size: ${fontSizing.xs};
    font-weight: bold;
  }

  p {
    font-size: ${fontSizing.xxxs};
  }

  .stat-category {
    font-weight: bold;
  }


`


