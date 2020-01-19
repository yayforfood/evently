import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password_digest: '',
      image_url: '',
      description: '',
      interests: ''
    }
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div>
        <p>Welcome to <span>Evently!</span></p>
        <p>New user registration </p>
        <form className="registrationForm">

          <label htmlFor="username">Enter Username</label>
          <input type="text" placeholder="Enter Username" name="username" onChange={this.onChange} />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter Password" name="password" onChange={this.onChange} />

          {/* <label htmlFor="password">Re-Enter Password</label>
          <input type="password" placeholder="Enter Password" name="password" onChange={this.props.onChange} /> */}

          <label htmlFor="image_url">Image URL</label>
          <input type="text" placeholder="Enter Image URL" name="image_url" onChange={this.onChange} />

          <label htmlFor="description">Bio</label>
          <input type="text" placeholder="Enter Bio" name="description" onChange={this.onChange} />

          <label htmlFor="interests">Interests</label>
          <input type="text" placeholder="Enter Interests" name="interests" onChange={this.onChange} />

          <Link to="/"><input
            type="submit"
            className="button"
            value="Register"
            onClick={(e) => this.props.handleRegister(e,
              {
                username: this.state.username,
                password_digest: this.state.password_digest,
                image_url: this.state.image_url,
                description: this.state.description,
                interests: this.state.interests
              })
            }
          ></input>
          </Link>
        </form>
      </div >
    )
  }
}

export default Register;