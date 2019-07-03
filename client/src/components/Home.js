import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import { Input, Row, Col } from 'reactstrap';
import './Home.css';


class Home extends Component {
    render (){
        return(
            <div className="home">
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Card className="mainCard card col-centered">
                                    <h1>Channel 1</h1>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Gain and Volume</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Equalizer</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Monitoring</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="mainCard card col-centered">
                                    <h1>Channel 2</h1>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Gain and Volume</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Equalizer</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Monitoring</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="mainCard card col-centered">
                                    <h1>Channel 3</h1>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Gain and Volume</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Equalizer</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Monitoring</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="mainCard card col-centered">
                                    <h1>Channel 4</h1>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Gain and Volume</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Equalizer</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Monitoring</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="mainCard card col-centered">
                                    <h1>Channel 5</h1>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Gain and Volume</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Equalizer</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Monitoring</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="mainCard card col-centered">
                                    <h1>Channel 6</h1>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Gain and Volume</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Equalizer</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <Card.Body className="mainCardBody">
                                        <Card.Title>Monitoring</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                            <Card className="mainCard card col-centered">
                                    <h1>All Volume and Gains</h1>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <h1>All Monitors</h1>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <h1>Save profile</h1>
                                </Card>
                                <Card className="mainCard card col-centered">
                                    <h1>>Load profile</h1>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Home;