import React, { Component } from 'react';
import LoginPage from './LoginPage';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h1>Ecolo'Occ</h1>
                <h2>Espace Association</h2>
                <button type="button" className="btn btn-success w-50 my-2">
                    <Link to="/loginpage">Je me connecte</Link>
                </button>
                <button type="button" className="btn btn-danger w-50 my-2">
                    <Link to="/createspace">Je veux créer mon compte</Link>
                </button>
            </div>
        );
    }
}

export default Home;
