import React from 'react'
import PropTypes from "prop-types"

import { FriendInfoContainer } from './FriendsStyleComponents'

const Friend = props => {
  const { name, age, email } = props.friend
  return (
    <FriendInfoContainer>
      <h3>{name}</h3>
      <p><span className="stat-category">Age:</span> {age}</p>
      <p><span className="stat-category">Email:</span> {email}</p>
    </FriendInfoContainer>
  )
}

Friend.propType = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string
}

export default Friend