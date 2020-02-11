import React from 'react';
import './Nurse.css'

export default class Nurse extends React.Component {
    render() {
        return (
            <div className = 'nurse'>
                <h3 className = 'nurse_nick_name'>
                    {this.props.name}
                </h3>
                <h4 className = 'voalte'>{this.props.voalte}</h4>
                {/* Need to add ternary operator top control presence of buttons.
                    maybey add them into the parent*/}
            </div>
        )
    }              
}