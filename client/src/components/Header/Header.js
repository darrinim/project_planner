import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('look at me!', this.props);
  return (
    <div className="headerContainer">
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/login">Start a Project</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link
              onClick={(e) => this.props.handleLogout(e)}>Log out</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
}

export default Header
