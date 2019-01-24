import React, { Component } from 'react';
import { Card, CardTitle, Container, Row, CardSubtitle, CardText } from 'reactstrap';
import axios from 'axios';

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
        this.props.history.push("/loginpage");
    }

    render() {
        const { activites } = this.state;
        console.log(activites)
        return (
            <div>
                <button onClick={this.disconnect} type="button" className="btn btn-danger">Se déconnecter</button>
                <h1>Mes Activités</h1>
                <Container>
                    <Row>
                        {
                            activites.map((activite, key) =>
                                <Card key={key} className="mx-auto">
                                    <CardTitle>{activite.title}</CardTitle>
                                    <CardSubtitle>{activite.date}</CardSubtitle>
                                    <CardText>{activite.description}</CardText>
                                    <CardText>{activite.lieu}</CardText>
                                    <CardText>{activite.prix}</CardText>
                                    <CardText>{activite.infos}</CardText>
                                </Card>
                            )
                        }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ProjectList;