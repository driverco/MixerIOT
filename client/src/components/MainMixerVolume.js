import React, { Component } from 'react';
import VolumeCard from './VolumeCard';
import { Row } from 'react-bootstrap';



class MainMixerVolume extends Component {
    render (){
        return(
            <Row>
                <VolumeCard channel ="1" />
                <VolumeCard channel ="2" />
                <VolumeCard channel ="3" />
                <VolumeCard channel ="4" />
                <VolumeCard channel ="5" />
                <VolumeCard channel ="6" />
                <VolumeCard channel ="7" />
                <VolumeCard channel ="8" />
                <VolumeCard channel ="9" />
                <VolumeCard channel ="10" />
            </Row>
        );
    }
};

export default MainMixerVolume;