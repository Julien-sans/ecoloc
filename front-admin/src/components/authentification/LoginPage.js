import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import '../../styles/loginPage.css';
import { connect } from 'react-redux';
import {
    authentification
} from '../../actions/forms';

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
    const { authentification } = this.props;
    event.preventDefault()
    axios.post("/api/auth/signin", this.state)
      .then(res => res.data)
      .then(res => {
        authentification(res);
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
      <Container>
        <Row>
          <Col xs='12'>
            <div className="d-flex flex-column align-items-center justify-content-center mx-auto loginPage">
              <div className="container-text mx-auto">Ecolo'Occ</div>
              <form onSubmit={this.handleSubmitSignIn} className="border rounded form my-5 mx-auto">
                <h2 className="mt-5 text-center">Je me connecte</h2>
                <div className="form-group w-75 mx-auto mt-5">
                  <input onChange={this.updateField} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrez votre email"></input>
                </div>
                <div className="form-group w-75 mx-auto">
                  <input onChange={this.updateField} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Mot de passe"></input>
                </div>
                {errorAuth ? <h4 className="text-center my-3">{errorAuth}</h4> : ''}
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary mb-5">
                    Se connecter
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
      auth
  }
};

const mapDispatchToProps = {
  authentification
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
