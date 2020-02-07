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
                    Standby list
                </Link>
                
                <Link
                    to='/float-list'>
                    Float List
                </Link>

                <Link
                    to = '/triple-list'>
                    triple list
                </Link>
            </footer>
        )
    }
}