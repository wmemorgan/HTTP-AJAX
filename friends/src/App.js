import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import axios from 'axios'

import AppContainer from './components/StyleComponents/AppStyles'
import FriendsList from './components/FriendsComponents/FriendsList'
import Friend from './components/FriendsComponents/Friend'
import Header from './components/Header'
import Form from './components/SharedComponents/Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
    console.log(`App props are: `, this.props)
  }

  updateFriends = data => {
    this.setState({ friends: data },
      () => console.log(`updateFriends invoked state is: `, this.state)
    )
  }

  deleteFriend = id => {
    console.log("Friend is being deleted")
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        // Update main app state
        this.updateFriends(response.data)
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data },
          () => console.log(`CDM invoked state is: `, this.state))
      })
      .catch(error => console.log(`Data retrieval error: ${error}`))
  }

  render() {
    console.log(`render state is: `, this.state)
    return (
      <AppContainer>
        <Header />
        {/* Add routes */}
        <Route
          exact path='/'
          render={props => 
            <FriendsList 
              {...props} 
              {...this.state}
            />}
        />
        <Route 
            path='/add'
            render={props => 
              <Form 
                {...props}
                updateFriends={this.updateFriends}
                add
              />}
        />
        <Route 
            path='/update'
            render={props => 
              <Form 
                {...props}
                updateFriends={this.updateFriends}
                update
              />}
        />
        <Route 
            path='/delete'
            render={props => 
              <Form 
                {...props}
                updateFriends={this.updateFriends}
                deleteFriend={this.deleteFriend}
                delete
              />}
        />
        {this.state.friends.map(friend => (
          <Route
            key={friend.id}
            path={`/friends/${friend.id}`}
            render={props => 
              <Friend 
                {...props} 
                friend={friend} 
                deleteFriend={this.deleteFriend}
              />
            }
          />
        ))}
      </AppContainer>
    );
  }
}

const AppWithRouter = withRouter(App)

export default AppWithRouter;
