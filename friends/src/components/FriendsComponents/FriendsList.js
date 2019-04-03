import React from 'react'
import { Link } from 'react-router-dom'

import { FriendsListContainer, Preview } from './FriendsStyleComponents'
// import Friend from './Friend'

const FriendsList = props => {
  const { friends } = props
  return (
    <FriendsListContainer>
      <h1>Friends of Lambda School</h1>
      {friends.length > 0 ? (friends.map(friend => (
          <Link to={`/friends/${friend.id}`}>
            <Preview key={friend.id}>
              {friend.name}
            </Preview>
          </Link>
        ))
      ) : (
          <h2>Loading...</h2>
        )}
    </FriendsListContainer>
  )
}

export default FriendsList