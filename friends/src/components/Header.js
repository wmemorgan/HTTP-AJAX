import React from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderContainer, Nav } from './HeaderStyles'

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='/add'>
          Add
        </NavLink>
        <NavLink to='/update'>
          Update
        </NavLink>
        <NavLink to='/delete'>
          Delete
        </NavLink>
      </Nav>
    </HeaderContainer>
  )
}

export default Header