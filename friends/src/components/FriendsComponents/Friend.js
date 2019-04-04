import React from 'react'
import PropTypes from "prop-types"

import { FriendInfoContainer } from './FriendsStyleComponents'
import Button from '../StyleComponents/Button'

const Friend = props => {
  const { name, id, age, email } = props.friend
  return (
    <FriendInfoContainer>
      <h3>{name}</h3>
      <p><span className="stat-category">ID:</span> {id}</p>
      <p><span className="stat-category">Age:</span> {age}</p>
      <p><span className="stat-category">Email:</span> {email}</p>
      <Button delete onClick={() => props.deleteFriend(id)}>Delete</Button>
    </FriendInfoContainer>
  )
}

Friend.propType = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string
}

export default Friend