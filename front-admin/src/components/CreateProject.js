import React, { Component } from 'react';
import { Card, CardTitle, Container, Row, CardSubtitle, CardText } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { editorInputForm, createActivite } from '../actions/forms';

class CreateProject extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        const { editorInputForm } = this.props;
        editorInputForm(name, value);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { form, createActivite } = this.props;
        console.log(form)
        //createActivite(form);
        axios.post('/api/activites/activitesliste', form)
            .then(response => response.data)
            .then(console.log)
    }

    render() {
        return (
            <div>
                <h1 className="projectTitle">Créer une activité</h1>
                <form className="d-flex flex-column justify-content-center" onSubmit={this.handleSubmit}>

                    <div className="form-group w-50">
                        <input onChange={this.handleChange} name="title" type="text" className="form-control" id="title" placeholder="Titre"></input>
                    </div>

                    <div className="form-group w-50">
                        <input onChange={this.handleChange} name="date" type="text" className="form-control" id="formGroupExampleInput2" placeholder="Date"></input>
                    </div>

                    <div className="form-group w-50">
                        <textarea onChange={this.handleChange} name="description" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div className="form-group w-50">
                        <input onChange={this.handleChange} name="lieu" type="text" className="form-control" id="formGroupExampleInput2" placeholder="Lieu"></input>
                    </div>

                    <div className="form-group w-50">
                        <input onChange={this.handleChange} name="prix" type="text" className="form-control" id="formGroupExampleInput2" placeholder="Prix"></input>
                    </div>

                    <div className="form-group w-50">
                        <input onChange={this.handleChange} name="infos" type="text" className="form-control" id="formGroupExampleInput2" placeholder="Infos de réservation"></input>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button className="my-4" type="submit" id="login-button">Valider</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { title, description, prix, lieu, infos, activite, date } = state;
    return {
        activite,
        form: {
            title,
            date,
            description,
            prix,
            lieu,
            infos
        }
    }
};

const mapDispatchToProps = { editorInputForm, createActivite };

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
