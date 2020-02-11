import React from 'react';
import NurseList from '../NurseList/NurseList';
import './Shift-Maker.css'

export default class Shift_Maker extends React.Component {
    render() {
        return (
            <main className='main_App'>
                <h1>Dayshift Feb 12th, 2020</h1>
                <NurseList />
            </main>
        );
    }
}