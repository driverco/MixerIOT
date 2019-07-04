import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './Home.css';
import ChannelCards from './ChannelCards';
import MainMixerCards from './MainMixerCards';



class Home extends Component {
    render (){
        return(
            <div className="home">
                <Row className="RowFull">
                    <Col className="col-9">
                        <Row>
                          <Col><ChannelCards channel ="1" /></Col>
                          <Col><ChannelCards channel ="2" /></Col>
                          <Col><ChannelCards channel ="3" /></Col>
                          <Col><ChannelCards channel ="4" /></Col>
                          <Col><ChannelCards channel ="5" /></Col>
                          <Col><ChannelCards channel ="6" /></Col>
                          <Col><ChannelCards channel ="7" /></Col>
                          <Col><ChannelCards channel ="8" /></Col>
                          <Col><ChannelCards channel ="9" /></Col>
                          <Col><ChannelCards channel ="10" /></Col>
                        </Row>
                    </Col>
                    <Col  className="col-1">
                        <MainMixerCards />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Home;