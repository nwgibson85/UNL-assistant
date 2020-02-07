import React from 'react';
import Nurse from '../Nurse/Nurse';
import {nurseArray} from '../../nurse-helper';
import './NurseList.css'

export default class NurseList extends React.Component {

    render() {
        
        return (
            <section className = 'nurse_List'>
                <ul className = 'nurse_List_Ul'>
                    {nurseArray.map((nurse, i) =>
                        <li key = {i}>
                            <Nurse
                                // will need to change id to db id rather than phone number.
                                id = {nurse.phone}
                                name = {nurse.name}
                                />
                        </li>
                    )}
                </ul>
                <div className = 'nurse_List_button_box'>
                    <button
                        type = 'button'
                        className = 'nurse_List-addNote'>
                            Add RN
                    </button>
                </div>
            </section>
        )
    }
}