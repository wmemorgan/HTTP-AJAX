import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

import { FriendsListContainer, Preview } from './FriendsStyleComponents'
// import Friend from './Friend'

const FriendsList = props => {
  const { friends } = props
  return (
    <FriendsListContainer>
      <h1>Friends of Lambda School</h1>
      {friends.length > 0 ? (friends.map(friend => (
          <Link key={friend.id} to={`/friends/${friend.id}`}>
            <Preview>
              {friend.name}
            </Preview>
          </Link>
        ))) : (
          <h2>Loading...</h2>
      )}
    </FriendsListContainer>
  )
}

FriendsList.propTypes = {
  friends: PropTypes.array
}

export default FriendsList