import React, { Component } from 'react';
import MixerCard from './MixerCard';


class MainMixerCards extends Component {
    render (){
        return(
            <div>
                <MixerCard content = "Volumes" type="global" icon="volume" />
                <MixerCard content = "Monitors" type="global"  icon="monitor"/>
            </div>
        );
    }
};

export default MainMixerCards;