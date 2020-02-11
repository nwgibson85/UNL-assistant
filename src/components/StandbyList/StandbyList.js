import React from 'react';
import NurseVariable from '../Nurse/NurseVariable/NurseVariable';
import TechVariable from '../Tech/TechVariable';
import {makeNurseStandbyArr, makeTechStandbyArr} from '../../nurse-helper';
import './StandbyList.css';

export default class StandbyList extends React.Component {

    render() {
        // Will need to refactor to use the db rather than nurseArray.
        // Will need to change it to use only the nurses on the schedule for next shift. 
        const standbyArr = makeNurseStandbyArr();
        const techStandbyArr = makeTechStandbyArr();
        return (
            <section className = 'standby_lists'>
                <h2>Scheduled Nurses</h2>
                <ul className = 'standby_List_Ul'>
                    {standbyArr.map((nurse, i) =>
                        <li key = {i}
                            className = 'standby_li'>
                            <NurseVariable
                                // will need to change id to db id rather than phone number.
                                className = {`standbyList_${i}`}
                                id = {nurse.phone}>
                                <p>{nurse.name}</p>
                                <p>{nurse.standby}</p>
                                <p>{nurse.phone}</p>
                            </NurseVariable>
                        </li>
                    )}
                </ul>
                <h2>Scheduled Techs</h2>
                <ul className = 'tech_standby_List_Ul'>
                    {techStandbyArr.map((tech, i) =>
                        <li key = {i}
                            className = 'standby_li'>
                            <TechVariable
                                // will need to change id to db id rather than phone number.
                                className = {`tech_standbyList_${i}`}
                                id = {i}>
                                <p>{tech.name}</p>
                                <p>{tech.standby}</p>
                                <p>{tech.phone}</p>
                            </TechVariable>
                        </li>
                    )}
                </ul>
            </section>
        );
    }
}