import React from 'react';
import TechVariable from '../Tech/TechVariable';
import NurseVariable from '../Nurse/NurseVariable/NurseVariable';
import {makeNurseFloatArr, makeTechFloatArr} from '../../nurse-helper';
import './FloatList.css';

export default class FloatList extends React.Component {
    render() {
        // Will need to refactor to use the db rather than nurseArray.
        // Will need to change it to use only the nurses on the schedule for next shift. 

        // Make an array of specific date to sort, sort then realign main array
        const floatArr = makeNurseFloatArr();
        const techFloatArr = makeTechFloatArr();
        return (
            <section className = 'float_lists'>
                <h2>Scheduled Nurses</h2>
                <ul className = 'float_List_Ul'>
                    {floatArr.map((nurse, i) =>
                        <li key = {i}
                            className = 'float_li'>
                            <NurseVariable
                                // will need to change id to db id rather than phone number.
                                className = {`floatList_${i}`}
                                id = {nurse.id}>
                                    <p>{nurse.nick_name}</p> 
                                    <p>{nurse.float}</p>
                            </NurseVariable>
                        </li>
                    )}
                </ul>
                <h2>Scheduled Techs</h2>
                <ul className = 'float_List_Ul'>
                    {techFloatArr.map((tech, i) =>
                        <li key = {i}
                            className = 'float_li'>
                            <TechVariable
                                // will need to change id to db id rather than phone number.
                                className = {`floatList_${i}`}
                                id = {tech.i}>
                                    <p>{tech.name}</p>
                                    <p>{tech.float}</p>
                            </TechVariable>
                        </li>
                    )}
                </ul>
            </section>
        );
    }
}