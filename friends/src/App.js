import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'

import AppContainer from './components/StyleComponents/AppStyles'
import FriendsList from './components/FriendsList'

class App extends Component {

  render() {
    return (
      <AppContainer>
        <FriendsList />
      </AppContainer>
    );
  }
}

export default App;
