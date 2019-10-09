import React from 'react';
import { Link } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';
import "./Header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const loggedIn = this.props.currentUser !== null ?
      <Link to="/plan">Start a Project</Link>  : <Link to="/login">Start a Project</Link>
      return (
        <div className="headerContainer">
          <Menu right>
            {loggedIn}
            <Link to="/login">Login</Link>
            <Link
            onClick={this.props.handleLogout}>Log out</Link>
          </Menu>
          <img className="dogHeader" src="https://res.cloudinary.com/darrin-im/image/upload/v1570502752/DogCartoon-wink_z9b537.png"/>
        </div>
      )
    };
}

export default Header
