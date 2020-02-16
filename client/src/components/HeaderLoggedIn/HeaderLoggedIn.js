import React from 'react';
import { Link } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';
import "./HeaderLoggedIn.css"

class HeaderLoggedIn extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const loggedIn = this.props.currentUser !== null ?
      <Link className="linkStyle" to="/plan">Start a Project</Link>  : <Link className="linkStyle" to="/login">Start a Project</Link>

      return (
        <div className="headerLogged">
          <Menu right>
            {loggedIn}
            <Link className="linkStyle" to="/">Home</Link>
            <Link className="linkStyle" to="/login">Login</Link>
            <Link className="linkStyle"
            onClick={this.props.handleLogout}>Log out</Link>
          </Menu>
          <img
            alt="cute-dog"
            className="dogMenu wigglers"
            src="https://res.cloudinary.com/darrin-im/image/upload/v1570672315/DogCartoon-face_tuaoq1.png" />
        </div>
      )
    };
}

export default HeaderLoggedIn;
