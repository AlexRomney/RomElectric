import React from 'react';

class Services extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('body').css('background-color', 'white');
    $('body').css('background-size', 'cover');
    $('body').css('bacground-repeat', 'no-repeat');
    $('body').css('height', '100vh');
  }

  render() {
    return(
      <div>
        <h1 className='center' style={{color: '#021e55'}}> Services </h1>
      </div>
    );
  }
}

export default Services;
