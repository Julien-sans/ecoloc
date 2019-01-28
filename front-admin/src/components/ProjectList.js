import React, { Component } from 'react';
import { 
    Card, 
    CardTitle, 
    Container, 
    Row, 
    CardSubtitle, 
    CardText, 
    Col, 
    Button } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    fetchActiviteSuccess,
    fetchActiviteFailure,
    fetchActiviteRequest
} from '../actions/forms';


class ProjectList extends Component {


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
        const { fetchActiviteRequest, fetchActiviteSuccess,  fetchActiviteFailure } = this.props;
        fetchActiviteRequest();
        axios.get(`/api/associations/activites`)
            .then(response => response.data)
            .then(activites => fetchActiviteSuccess(activites))
            .catch(error => fetchActiviteFailure(error));
    }

    disconnect = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.authorization;
        this.props.history.push("/");
    }

    render() {
        const { activite } = this.props;
        console.log(activite)
        return (
            <div>
                <nav className="navbar sticky-top navbar-light bg-light">
                    <a className="navbar-brand" href="/">Ecolo'Occ</a>
                    <button type="button" className="btn btn-success"><Link to='/createproject'>Créer un Projet</Link></button>
                    <button onClick={this.disconnect} type="button" className="btn btn-danger">Se déconnecter</button>
                </nav>
                <h1 className="text-center">Mes Activités</h1>
                <Container fluid>
                    <Row>
                        {
                            activite.map((activite, key) =>
                                <Col md='4' key={key} className="my-3">
                                    <Card className="mx-auto" outline color="success">
                                        <CardTitle>{activite.title}</CardTitle>
                                        <CardSubtitle>{activite.date_publication}</CardSubtitle>
                                        <CardSubtitle>{activite.date}</CardSubtitle>
                                        <CardText>{activite.description}</CardText>
                                        <CardText>{activite.lieu}</CardText>
                                        <CardText>{activite.prix}</CardText>
                                        <CardText>{activite.infos}</CardText>
                                        <Link to={`/editproject/${activite.id}`}>Editer l'activité</Link>
                                        <Button>Supprimer</Button>
                                    </Card>
                                </Col>
                            )
                        }

                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { activite } = state;
    return {
        activite
    }
}

const mapDispatchToProps = {
    fetchActiviteRequest,
    fetchActiviteSuccess,
    fetchActiviteFailure
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

