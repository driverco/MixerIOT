import React, { Component } from 'react';
import MixerCard from './MixerCard';


class ChannelCards extends Component {
    render (){
        return(
            <div>
              <MixerCard channel ={this.props.channel} content={"Channel " + this.props.channel} type="header" text="off"/>
              <MixerCard channel ={this.props.channel} content="Volume" type="basic" icon="volume" text="off"/>
              <MixerCard channel ={this.props.channel} content="Equalizer" type="basic" icon="equalizer" text="off"/>
              <MixerCard channel ={this.props.channel} content="Monitor" type="basic" icon="monitor" text="off" />
            </div>
        );
    }
};

export default ChannelCards;