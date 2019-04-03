import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'

import AppContainer from './components/StyleComponents/AppStyles'
import FriendsList from './components/FriendsComponents/FriendsList'
import Friend from './components/FriendsComponents/Friend'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({friends: response.data}, 
        () => console.log(`CDM invoked state is: `, this.state))
    })
    .catch(error => console.log(`Data retrieval error: ${error}`))
  }

  render() {
    console.log(`render state is: `, this.state)
    return (
      <AppContainer>
        {/* Add routes */}
        <Route 
          exact path='/'
          render={props => <FriendsList {...props} {...this.state}/>} 
        />
        {this.state.friends.map(friend => (
          <Route 
            key={friend.id}
            path={`/friends/${friend.id}`}
            render={props => <Friend {...props} friend={friend}/>}
          />
          ))}
      </AppContainer>
    );
  }
}

export default App;
