import React from 'react'
import { Link } from 'react-router-dom'

import { FriendsListContainer, Preview } from './FriendsStyleComponents'
// import Friend from './Friend'

const FriendsList = props => {
  const { friends } = props
  return (
    <FriendsListContainer>
      {friends.map(friend => (
        <Link to={`/friends/${friend.id}`}>
          <Preview key={friend.id}>
            {friend.name}
          </Preview>
        </Link>
    ))}
    </FriendsListContainer>
  )
}

export default FriendsList