import React from 'react';
import './Nurse.css'

export default class Nurse extends React.Component {
    render() {
        return (
            <div className = 'nurse'>
                <h4 className = 'nurse_Name'>
                    {this.props.name}
                </h4>
                {/* Need to add ternary operator top control presence of buttons.
                    maybey add them into the parent*/}
                <button 
                    className = 'remove_Nurse'
                    type = 'button'
                    // onClick = {this.handleClickRemove}
                >
                    Remove RN
                </button>
                <div className = 'assignment'>
                    <h6 className = 'assigned_Room_1'>
                        room 1 <button>remove patient</button>
                    </h6>
                    <h6 className = 'assigned_Room_2'>
                        room 2  <button>remove patient</button>
                    </h6>
                </div>
            </div>
        )
    }              
}