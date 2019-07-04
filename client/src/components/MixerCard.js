import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import './MixerCard.css';
import { VolumeUp , Equalizer, Headset} from '@material-ui/icons';


class MixerCard extends Component {
    constructor(props) {
        super(props);

        this.getContent = this.getContent.bind(this);

    }

    render (){
        let cardcss = "mainCard card col-centered";
        if (this.props.type ==="header") cardcss = cardcss + " mainCardHeader";
        if (this.props.type ==="global") cardcss = cardcss + " mainCardGlobal";
        return(
                <Card className={ cardcss }>
                   
                   {(this.props.type==="global")&&<h1>{this.getContent()}</h1>}
                   {(this.props.type==="header")&&<h2>{this.getContent()}</h2>}
                   {(this.props.type==="basic")&&<Card.Body className="mainCardBody">{this.getContent()}</Card.Body>}
                </Card>
        );
    }
    getContent(content, icon){
        return(
        <div>
          {(this.props.icon==="volume")&& <VolumeUp />}
          {(this.props.icon==="equalizer")&& <Equalizer />}
          {(this.props.icon==="monitor")&& <Headset />}
          {(this.props.text!=="off")&& this.props.content}
          {(this.props.text==="off")&&(this.props.type==="header")&& this.props.channel}
          
        </div>);

    }
};

export default MixerCard;