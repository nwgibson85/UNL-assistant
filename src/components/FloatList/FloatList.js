import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NurseVariable from '../Nurse/NurseVariable/NurseVariable';
import {nurseArray} from '../../nurse-helper';
import './FloatList.css';

export default class FloatList extends React.Component {
    render() {
        // Will need to refactor to use the db rather than nurseArray.
        // Will need to change it to use only the nurses on the schedule for next shift. 

        // Make an array of specific date to sort, sort then realign main array
        const sortedFloatDatesArr = nurseArray.sort(function(a, b) {
            a = new Date(a.dateModified);
            b = new Date(b.dateModified);
            return a>b ? -1 : a<b ? 1 : 0;
        });
        const oldestFloatDatesArr = sortedFloatDatesArr.reverse();
        return (
            <div className = 'floatList'>
                <header className='App__header'>
                    <Header />
                </header>
                <ul className = 'float_List_Ul'>
                    {oldestFloatDatesArr.map((nurse, i) =>
                        <li key = {i}>
                            <NurseVariable
                                // will need to change id to db id rather than phone number.
                                className = {`floatList_${i}`}
                                id = {nurse.phone}
                                name = {nurse.name}
                                float = {nurse.float}>
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