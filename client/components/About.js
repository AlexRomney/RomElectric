import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('body').css('background-image', "url(http://res.cloudinary.com/omash612/image/upload/v1490819196/ElectricPoles_jrymna.jpg)");
    $('body').css('background-size', 'cover');
    $('body').css('bacground-repeat', 'no-repeat');
    $('body').css('height', '100vh');
  }

  componentWillUnmount() {
    $('body').css('background-image', 'none');
  }

  render() {
    return(
      <div>
        <div className='row'>
          <div className='col s12'>
            <h1 className='center' style={{color: '#021e55'}}> About ROM </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
