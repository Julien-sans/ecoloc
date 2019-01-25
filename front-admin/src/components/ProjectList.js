import React, { Component } from 'react';
import { Card, CardTitle, Container, Row, CardSubtitle, CardText, Col } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ConvertDateTime = (date) => {
    const t = date.split(/[- : T .]/)
    const newDate = t[2] + '-' + t[1] + '-' + t[0] + ' ' + t[3] + 'h' + t[4];
    return newDate;
}

class ProjectList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activites: [],
        };
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
        axios.get(`/api/associations/activites`)
            .then(response => response.data)
            .then(activites => this.setState({ activites }))
            .catch(error => { console.error(error) });
    }

    disconnect = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.authorization;
        this.props.history.push("/");
    }

    render() {
        const { activites } = this.state;
        console.log(activites)
        return (
            <div>
                <nav className="navbar sticky-top navbar-light bg-light">
                    <a className="navbar-brand" href="#">Ecolo'Occ</a>
                    <button type="button" className="btn btn-success"><Link to='/createproject'>Créer un Projet</Link></button>
                    <button onClick={this.disconnect} type="button" className="btn btn-danger">Se déconnecter</button>
                </nav>
                <h1 className="text-center">Mes Activités</h1>
                <Container fluid>
                    <Row>
                        {
                            activites.map((activite, key) =>
                                <Col md='4' key={key} className="my-3">
                                    <Card className="mx-auto">
                                        <CardTitle>{activite.title}</CardTitle>
                                        <CardSubtitle>{ConvertDateTime(activite.date_publication)}</CardSubtitle>
                                        <CardSubtitle>{ConvertDateTime(activite.date)}</CardSubtitle>
                                        <CardText>{activite.description}</CardText>
                                        <CardText>{activite.lieu}</CardText>
                                        <CardText>{activite.prix}</CardText>
                                        <CardText>{activite.infos}</CardText>
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

export default ProjectList;