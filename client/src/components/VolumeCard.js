import React, { Component } from 'react';
import {Card, Col} from 'react-bootstrap';
import './VolumeCard.css';
import { Range, Direction , getTrackBackground } from 'react-range';

const STEP = 1;
const MIN = 0;
const MAX = 31;

class VolumeCard extends Component {
    constructor(props) {
        super(props);

    }
    state = { values: [31] };

    render (){
        return(
            <div><Col>
                <Card className = "volumeCardHeader"><h1>{this.props.channel}</h1></Card>
                <Card className=" volumeCard card col-centered p-4">
                    <Range
                        direction={Direction.Up}
                        values={this.state.values}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={values => this.setState({ values })}
                        renderTrack={({ props, children }) => (
                            <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                style={{
                                    ...props.style,
                                    flexGrow: 1,
                                    width: '10px',
                                    display: 'flex',
                                    height: '300px'
                                  }}
                            >
                            <div
                                ref={props.ref}
                                style={{
                                    width: '5px',
                                    height: '100%',
                                    borderRadius: '4px',
                                    background: getTrackBackground({
                                        values: this.state.values,
                                        colors: ['#E6FB04', '#ccc'],
                                        min: MIN,
                                        max: MAX,
                                        direction: Direction.Up
                                    }),
                                    alignSelf: 'center'
                                }}
                            >
                            {children}
                            </div>
                            </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                            <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '42px',
                                width: '42px',
                                borderRadius: '4px',
                                backgroundColor: '#FFF',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0px 2px 6px #AAA'
                            }}
                            >
                            <div
                                style={{
                                width: '16px',
                                height: '5px',
                                backgroundColor: isDragged ? '#548BF4' : '#CCC'
                                }}
                            />
                            </div>
                        )}
                    />
                </Card>
                </Col>
            </div>
        );
    }
};

export default VolumeCard;