import React, { Component } from 'react';
import {
    Card,
    CardTitle,
    Container,
    Row,
    CardSubtitle,
    CardText,
    Col,
    Button
} from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    fetchActiviteSuccess,
    fetchActiviteFailure,
    fetchActiviteRequest,
    fetchAssociationRequest,
    fetchAssociationSuccess,
    fetchAssociationFailure,
    deleteActiviteRequest,
    deleteActiviteSuccess,
    deleteActiviteFailure,
    authentification,
    removeAuthentification
} from '../actions/forms';
import '../styles/projectList.css'
import image from '../styles/earth-158806_960_720.png';


class ProjectList extends Component {

    constructor(props) {
        super(props);
        this.removeActivite = this.removeActivite.bind(this);
    }

    componentDidMount() {
        // const { association_id } = this.props.match.params;
        // if(association_id) {
        //     axios.get(`/api/associations/${association_id}/activites`)
        //     .then(response => response.data)
        //     .then(activites => this.setState({ activites }))
        //     .catch(error => { console.error(error) });
        // }
        // else {
        // }
        this.fetchAssociation();
        const { fetchActiviteRequest, fetchActiviteSuccess, fetchActiviteFailure } = this.props;
        fetchActiviteRequest();
        axios.get(`/api/associations/activites`)
            .then(response => response.data)
            .then(activites => fetchActiviteSuccess(activites))
            .catch(error => fetchActiviteFailure(error));
    }

    fetchAssociation() {
        const { fetchAssociationRequest, fetchAssociationSuccess, fetchAssociationFailure } = this.props;
        fetchAssociationRequest();
        axios.get(`/api/associations/`)
            .then(response => response.data)
            .then(association => fetchAssociationSuccess(association))
            .catch(error => fetchAssociationFailure(error));
    }

    disconnect = () => {
        const { removeAuthentification } = this.props;
        localStorage.removeItem('token');
        removeAuthentification();
        delete axios.defaults.headers.authorization;
        this.props.history.push("/");
    }

    removeActivite = (id) => {
        const { deleteActiviteRequest, deleteActiviteSuccess, deleteActiviteFailure } = this.props;
        deleteActiviteRequest();
        axios.delete(`api/activites/activitesliste/${id}`)
            .then(response => response.data)
            .then(() => deleteActiviteSuccess(id))
            .catch(error => deleteActiviteFailure(error));
    }

    render() {
        const { activite, association } = this.props;

        return (
            <div className='projectlist'>
                <Container>
                    <Row>
                        <Col xs='12' md='6' className="leftColumn d-flex justify-content-center">

                            <div className='navigation'>
                                <div className="container-text mx-auto">Ecolo'Occ</div>
                                <div className="text-center assoName mb-4">{association.length > 0 && association[0].association}</div>
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-success mx-3"><Link className="text-white projectLink" to='/createproject'>Créer un Projet</Link></button>
                                    <button onClick={this.disconnect} type="button" className="btn btn-danger mx-3">Se déconnecter</button>
                                    <img src={image} className="backgroundNatura" alt="logo" />

                                </div>
                            </div>

                        </Col>
                        <Col md='12' lg='6' className='rightColumn'>
                            <h1 className="text-center my-4">Mes activités</h1>
                            <hr className="mb-4" />
                            {
                                activite.map((activite, key) =>
                                    <Col md='12' key={key} className="my-3">
                                        <Card outline>
                                            <div className="card-header text-center">{activite.title}</div>
                                            <div className="p-2">
                                                <CardTitle className="cardHeader"></CardTitle>
                                                <CardSubtitle className="my-2">Evénement créé le - {activite.date_publication}</CardSubtitle>
                                                <CardSubtitle className="my-2">Date de l'événement - {activite.date}</CardSubtitle>
                                                <CardText className="text-center mt-4">Description</CardText>
                                                <CardText>{activite.description}</CardText>
                                                <CardText>Lieu - {activite.lieu}</CardText>
                                                <CardText>Prix - {activite.prix}</CardText>
                                                <CardText>Infos - {activite.infos}</CardText>
                                            </div>
                                            <div className="card-footer d-flex flex-row-reverse">
                                                <Button className="btn-warning mx-3"><Link className="projectLink text-white" to={`/editproject/${activite.id}`}>Editer l'activité</Link></Button>
                                                <Button onClick={() => this.removeActivite(activite.id)} className="btn-danger mx-3">Supprimer</Button>
                                            </div>


                                        </Card>
                                    </Col>
                                )
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { activite, association } = state;
    return {
        activite,
        association
    }
}

const mapDispatchToProps = {
    fetchActiviteRequest,
    fetchActiviteSuccess,
    fetchActiviteFailure,
    fetchAssociationRequest,
    fetchAssociationSuccess,
    fetchAssociationFailure,
    deleteActiviteRequest,
    deleteActiviteSuccess,
    deleteActiviteFailure,
    authentification,
    removeAuthentification
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

