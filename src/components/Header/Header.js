import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    getDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }

    render() {
        const backArrow = '< ';
        const forwardArrow = ' >';
        const date = this.getDate();
        return (
            <nav role="navigation">
                <h3>{date}</h3>
                <h3>
                    {backArrow} 
                    <Link
                        to = '/'>
                        Shift 
                    </Link>
                    <Link 
                        to = '/shift-maker'>
                         {forwardArrow}
                    </Link>
                </h3>
                <h3>log in / log out</h3>
            </nav>  
        )
        
    }
}

