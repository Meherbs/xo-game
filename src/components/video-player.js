import videoSource from '../test.mp4';
import React, { Component } from 'react';

class VideoPayer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="VideoPlayer">
                <div className="container">
                    <h1 className="titre">Video : </h1>
                    <div className="game-content">
                        <video width="400" controls>
                            <source src={videoSource} type="video/mp4" />
                                Your browser does not support HTML video.
                        </video>
                    </div>
                </div>
            </div>
        );
    }

}

export default VideoPayer;
