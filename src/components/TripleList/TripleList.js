import React from 'react';
import NurseVariable from '../Nurse/NurseVariable/NurseVariable';
import {makeNurseTripleArr} from '../../nurse-helper';
import './TripleList.css';

export default class TripleList extends React.Component {
    render() {
        // Will need to refactor to use the db rather than nurseArray.
        // Will need to change it to use only the nurses on the schedule for next shift. 
        const tripleArr = makeNurseTripleArr();
        return (
            <ul className = 'triple_List_Ul'>
                {tripleArr.map((nurse, i) =>
                    <li key = {i}>
                        <NurseVariable
                            className = {`tripleList_${i}`}
                            id = {nurse.id}>
                            <p>{nurse.name}, {nurse.triple}</p>
                        </NurseVariable>
                    </li>
                )}
            </ul>
        );
    }
}