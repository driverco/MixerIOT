import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import { Input, Row, Col } from 'reactstrap';
import './Home.css';


class SliderSample extends Component {
    render (){
        return(
            <div className="home">
                <Card className="mainCard card col-centered">
                    
                <Row className="rotate90">
                            <Col className ="p-0 mr-0">
                                <Input type="range" className="volumeInput32" min="0" max="32" step="1" id="age" name="age" />
                            </Col>
                            <Col  className ="p-0 mr-0">
                                <Input type="range" className="volumeInput32" min="0" max="32" step="1" id="age" name="age" />
                            </Col>
                            <Col  className ="p-0 mr-0">
                                <Input type="range" className="volumeInput32" min="0" max="32" step="1" id="age" name="age" />
                            </Col>
                            <Col  className ="p-0 mr-0">
                                <Input type="range" className="volumeInput32" min="0" max="32" step="1" id="age" name="age" />
                            </Col>
                        </Row>

                    <Card.Body className="mainCardBody">
                        <Card.Title>Volumes</Card.Title>
                        <Card.Text>
                        Main and Channels Volume
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default SliderSample;