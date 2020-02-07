import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NurseVariable from '../Nurse/NurseVariable/NurseVariable';
import {nurseArray} from '../../nurse-helper';
import './StandbyList.css';

export default class StandbyList extends React.Component {
    render() {
        // Will need to refactor to use the db rather than nurseArray.
        // Will need to change it to use only the nurses on the schedule for next shift. 

        // Make an array of specific date to sort, sort then realign main array
        const sortedStandbyDatesArr = nurseArray.sort(function(a, b) {
            a = new Date(a.dateModified);
            b = new Date(b.dateModified);
            return a>b ? -1 : a<b ? 1 : 0;
        });
        const oldestStandbyDatesArr = sortedStandbyDatesArr.reverse();
        return (
            <div className = 'standbyList'>
                <header className='App__header'>
                    <Header />
                </header>
                <ul className = 'standby_List_Ul'>
                    {oldestStandbyDatesArr.map((nurse, i) =>
                        <li key = {i}>
                            <NurseVariable
                                // will need to change id to db id rather than phone number.
                                className = {`standbyList_${i}`}
                                id = {nurse.phone}
                                name = {nurse.name}
                                standby = {nurse.standby}>
                            </NurseVariable>
                        </li>
                    )}
                </ul>
                <section className = 'App_footer'>
                    <Footer />
                </section>
            </div>
        );
    }
}