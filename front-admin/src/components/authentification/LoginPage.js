import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import instance from '../../helpers/instances';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorAuth: ''
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
  }

  updateField = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmitSignIn = (event) => {
    event.preventDefault()
    axios.post("/api/auth/signin", this.state)
      .then(res => res.data)
      .then(res => {
        localStorage.setItem('token', res.token);
        axios.defaults.headers.authorization = `Bearer ${res.token}`;
        this.props.history.push("/projectlist");
        const decoded = jwt_decode(res.token);
        console.log(decoded);
      })
      .catch(err => {
        console.error(err)
        this.setState({ errorAuth: 'Email ou mot de passe incorrect' })
      })
  }

  render() {
    const { errorAuth } = this.state;
    return (
      <div>
        <h1>Ecolo'Occ</h1>
        <h2>Je me connecte</h2>
        <form onSubmit={this.handleSubmitSignIn}>
          <div class="form-group">
            <input onChange={this.updateField} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          </div>
          <div class="form-group">
            <input onChange={this.updateField} name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
          {errorAuth ? <h2>{errorAuth}</h2> : ''}
          <button type="submit" class="btn btn-primary">
            Se connecter
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
