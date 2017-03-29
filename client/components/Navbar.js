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
            <Link to='/' className="brand-logo" style={{paddingLeft: '10px', color: '#021e55'}}>ROMElectric</Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link className='nav-tabs' to='/'> Home </Link></li>
              <li><Link className='nav-tabs' to='/about'> About </Link></li>
              <li><Link className='nav-tabs' to='/contact'> Contact </Link></li>
              <li><Link className='nav-tabs' to='/services'> Services </Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link className='nav-tabs' to='/about'> About </Link></li>
              <li><Link className='nav-tabs' to='/contact'> Contact </Link></li>
              <li><Link className='nav-tabs' to='/services'> Services </Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
