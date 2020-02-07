import React from 'react';
import NurseList from '../NurseList/NurseList';

export default class AssignmentHome extends React.Component {
    render() {
        return (
            <main className='main_App'>
                <h1>UNL-assistant app</h1>
                <NurseList />
            </main>
        );
    }
}

            