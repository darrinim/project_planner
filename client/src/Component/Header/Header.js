import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

class HamburgerMenuWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  };

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div class="wrapper">
        {this.state.isOpen && <div class="sidebar">
          <ul className="menu">
            <li>
              <Link className="link" to="/home">Home</Link>
            </li>
            <li>
              <Link className="link" to="/planning">Plan Your Trip</Link>
            </li>
            <li>
              <Link
                handleLogout={this.props.handleLogout}
                className='link'
                to='/'>Logout</Link>
            </li>
          </ul>

        </div>}
        <label for="chk" className="hide-menu-btn">

          <button
            className="hamburgerButton"
            onClick={() => this.toggleMenu()}>
            <i className="fas fa-bars fun-hamburger-color"></i>
          </button>


        </label>
        <div class="main-content">
          <div className="navbar">
            <div className="ruksak">
              <div>RukSak</div>
              <div className="tagline">Adventure Together</div>
            </div>


            <div className="nav-links">
              <li><Link className="link" to="/home">Home</Link></li>
              <li><Link className="link" to="/planning">Plan Your Trip</Link></li>
              <li><Link
                handleLogout={this.props.handleLogout}
                className='link'
                to='/'>Logout</Link>
              </li>
              {/* THIS IS WHERE I NEED TO PUT THE LOGOUT LINK, JUST NEED TO PASS DOWN */}

            </div>
          </div>

        </div>

      </div>

    )

  };
};

export default HamburgerMenuWrapper
