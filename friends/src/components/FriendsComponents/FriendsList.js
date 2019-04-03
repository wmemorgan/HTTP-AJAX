import React from 'react'
import { Link } from 'react-router-dom'

import { FriendsListContainer } from './FriendsStyleComponents'
import Friend from './Friend'

const FriendsList = props => {
  const { friends } = props
  return (
    <FriendsListContainer>
      {friends.map(friend => (
          <Link key={friend.id} to={`/friends/${friend.id}`}>
            <Friend friend={friend} />
          </Link>
        ))}
    </FriendsListContainer>
  )
}

export default FriendsList