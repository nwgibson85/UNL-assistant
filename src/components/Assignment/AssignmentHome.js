import React from 'react';
import NurseList from '../NurseList/NurseList';

export default class AssignmentHome extends React.Component {
    render() {
        return (
            <main className='main_App'>
                <h1>Night shift Feb. 12th, 2020</h1>
                <NurseList />
            </main>
        );
    }
}

            