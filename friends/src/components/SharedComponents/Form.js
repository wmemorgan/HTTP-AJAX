import React, { Component } from 'react'
import { FormContainer } from './FormStyles'
import Button from '../StyleComponents/Button'

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
    e.preventDefault()
    let newRecord = {
      id: this.state.id === '' ? Date.now() : this.state.id,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    console.log(`Form submitted data sent: ${JSON.stringify(newRecord)}`)
    this.setState({
      id: '',
      name: '',
      age: '',
      email: ''
    })

  }

  render() {
    return (
      <FormContainer>
        <form onSubmit={this.formSubmitHandler} {...this.props}>
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
          <Button type="submit" {...this.props}>
            {`${this.props.delete ? 'Delete' : 'Add'}  Friend`}
          </Button>
        </form>
      </FormContainer>
    )
  }

}

export default Form