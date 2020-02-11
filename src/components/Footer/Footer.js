import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import TokenService from '../../services/token-service'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className = 'List_Links'>
                <Link 
                    to = '/standby-list'>
                    <h5>Standby list</h5>
                </Link>
                
                <Link
                    to='/float-list'>
                    <h5>Float List</h5>
                </Link>

                <Link
                    to = '/triple-list'>
                    <h5>triple list</h5>
                </Link>
            </footer>
        )
    }
}