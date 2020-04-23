import React from 'react';
import { Divider } from 'semantic-ui-react';
//import { Image } from 'react-native';
import './Details.css';

function Detail (props) {
    return (
        <div className="Detail">
            <b>{props.title}</b>
            <Divider />
            {props.image}
            <p>
            {props.body}
            </p>
        </div>
    )
}

export default Detail;