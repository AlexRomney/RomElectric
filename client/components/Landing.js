import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <div className='row'>
          <div className='col s12'>
            <h1 className='center black-text'> Rom Electric </h1>
            <h5 className='center black-text'><em> Always A Free Estimate! </em></h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
