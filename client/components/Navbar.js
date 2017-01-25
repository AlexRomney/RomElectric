import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $(".button-collapse").sideNav({
      menuWidth: 200,
      closeOnClick: true,
    });
  }

  render() {
    return(
      <div>
        <nav>
          <div className="nav-wrapper" style={{backgroundColor: '#62c7ff'}}>
            <Link to='/' className="brand-logo" style={{paddingLeft: '10px'}}>RomElectric</Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to='/'> Home </Link></li>
              <li><Link to='/about'> About </Link></li>
              <li><Link to='/contact'> Contact </Link></li>
              <li><Link to='/services'> Services </Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to='/about'> About </Link></li>
              <li><Link to='/contact'> Contact </Link></li>
              <li><Link to='/services'> Services </Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
