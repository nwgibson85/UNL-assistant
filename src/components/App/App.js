import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ShiftMaker from '../Shift-Maker/Shift-Maker';
import StandbyList from '../StandbyList/StandbyList';
import FloatList from '../FloatList/FloatList';
import TripleList from '../TripleList/TripleList';
import AssignmentHome from '../Assignment/AssignmentHome';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';

class App extends React.Component { 
    
    render() {
        return (
            <div>
                <header className='App__header'>
                    <Header />
                </header>
                <main className='main_App'>
                    <Switch>
                        <Route 
                            exact
                            path = '/' 
                            component = {AssignmentHome} />

                        <Route 
                            path = '/shift-maker' 
                            component = {ShiftMaker} />
                        
                        <Route 
                            path = '/standby-list' 
                            component = {StandbyList} />
                        
                        <Route 
                            path = '/float-list' 
                            component = {FloatList} />
                        
                        <Route 
                            path = '/triple-list' 
                            component = {TripleList} />
                    </Switch>
                </main>
                <section className = 'App_footer'>
                    <Footer />
                </section>
            </div>
        );
    }
}

export default App;