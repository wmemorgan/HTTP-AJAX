import React from 'react'
import { Link } from 'react-router-dom'

import { FriendsListContainer } from './FriendsStyleComponents'

const FriendsList = props => {
  const { data } = props
  return (
    <FriendsListContainer>
      data.map(friend => {
        <Link key={friend.id} to={`/friends/${friend.id}`}>
          <Friend friend={friend}/>
        </Link>
      })
    </FriendsListContainer>
  )
}

export default FriendsList