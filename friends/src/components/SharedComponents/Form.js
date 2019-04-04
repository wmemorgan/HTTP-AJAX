import React, { Component } from 'react'
import { FormContainer } from './FormStyles'
import Button from '../StyleComponents/Button'
import axios from 'axios'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      age: '',
      email: ''
    }
  }

  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  formSubmitHandler = e => {
    // prevent default
    e.preventDefault()

    // gather form data
    let newRecord = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

    // send new record to api
    axios.post('http://localhost:5000/friends', newRecord)
      .then(response => {
        this.props.updateFriends(response.data)
        this.props.history.push('/')
      })
      .catch(err => console.log(err))

    console.log(`Form submitted data sent: ${JSON.stringify(newRecord)}`)
    
    // reset form fields
    this.setState({
      id: '',
      name: '',
      age: '',
      email: ''
    })
  }

  render() {
    return (
      <FormContainer {...this.props}>
        <form onSubmit={this.formSubmitHandler} >
          {this.props.update && 
            <input name="id" type="number" 
              placeholder="ID" onChange={this.inputChangeHandler} 
              value={this.state.id} 
            />
          }
          <input name="name" type="text" 
            placeholder="Name" onChange={this.inputChangeHandler}
            value={this.state.name} 
          />
          <input name="age" type="number" 
            placeholder="Age" onChange={this.inputChangeHandler}
            value={this.state.age} 
          />
          <input name="email" type="email" 
            placeholder="Email" onChange={this.inputChangeHandler}
            value={this.state.email}
          />
          <Button type="submit" >
            {`${this.props.delete ? 'Delete' : 'Add'}  Friend`}
          </Button>
        </form>
      </FormContainer>
    )
  }

}

export default Form