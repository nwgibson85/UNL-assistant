import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
//   handleLogoutClick = () => {
//     TokenService.clearAuthToken()
//   }

//   renderLogoutLink() {
//     return (
//       <div className='Header__logged-in'>
//         <Link
//           onClick={this.handleLogoutClick}
//           to='/'>
//           Logout
//         </Link>
//       </div>
//     )
//   }

//   renderLoginLink() {
//     return (
//       <div className='Header__not-logged-in'>
//         <Link
//           to='/login'>
//           Log in
//         </Link>
//         <Link
//           to='/register'>
//           Register
//         </Link>
//       </div>
//     )
//   }

// <nav className='Header'>
//    <Link to='/'>
//        Home
//    </Link> 
//        {this.renderLoginLink()}
//    {TokenService.hasAuthToken()
//        ? this.renderLogoutLink()
//        : this.renderLoginLink()}
//</nav>

    render() {
        const backArrow = '<';
        const forwardArrow = '>'
        return (
            <nav role="navigation">
                <p>Date</p>
                <p>{backArrow} Shift {forwardArrow}</p>
                <p>log in / log out</p>
            </nav>
            
                
        )
        
    }
}

