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
      <Link className="linkStyle" to="/plan">Start a Project</Link>  : <Link className="linkStyle" to="/login">Start a Project</Link>
      return (
        <div className="headerContainer">
          <Menu right>
            {loggedIn}
            <Link className="linkStyle" to="/login">Login</Link>
            <Link className="linkStyle"
            onClick={this.props.handleLogout}>Log out</Link>
          </Menu>
          <img className="dogHeader" src="https://res.cloudinary.com/darrin-im/image/upload/v1570502752/DogCartoon-wink_z9b537.png"/>
        </div>
      )
    };
}

export default Header
