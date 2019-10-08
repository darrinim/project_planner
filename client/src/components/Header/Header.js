import React from 'react';
import { Link } from 'react-router-dom';
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
      <nav>
        <ul className="navbar">
          <li>
            {loggedIn}
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link
              onClick={(e) => this.props.handleLogout(e)}>Log out</Link>
          </li>
{          /*<li><img className="dogHeader"src="https://res.cloudinary.com/darrin-im/image/upload/v1570502752/DogCartoon-wink_z9b537.png" /></li>*/}
        </ul>
      </nav>
    </div>
  )
}
}

export default Header
