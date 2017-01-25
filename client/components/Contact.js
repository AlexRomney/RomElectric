import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.refs.contactForm.reset();
  }

  render() {
    return(
      <div>
        <div className='row'>
          <div className='col s2' style={{padding: '0'}}>
            <div style={{background: 'linear-gradient(grey, #62c7ff)', width: '100%', height: '100vh'}}></div>
          </div>
          <div className='col s8 center'>
            <h1 className='black-text center'> Contact Brent </h1>
            <form onSubmit={this.handleSubmit} ref='contactForm'>
              <div className='row'>
                <div className='col s12 m3 offset-m3 center'>
                  <label className='black-text left'> First Name: </label>
                  <input className='black-text' type='text' required />
                </div>

                <div className='col s12 m3 center'>
                  <label className='black-text left'> Last Name: </label>
                  <input className='black-text' type='text' required />
                </div>
              </div>

              <div className='row'>
                <div className='col s12 m6 offset-m3 center'>
                  <label className='black-text left'> Email: </label>
                  <input type='text' required />
                </div>
              </div>

              <div className='row'>
                <div className='col s12 m6 offset-m3 center'>
                  <label className='black-text left'> Phone Number: </label>
                  <input type='text' />
                </div>
              </div>

              <div className='row'>
                <div className='col s12 m6 offset-m3 center'>
                  <label className='black-text left'> Message: </label>
                  <textarea></textarea>
                </div>
              </div>

              <div className='row'>
                <div className='col s12 m6 offset-m3'>
                  <input type='submit' value='Send' className='btn blue right' />
                </div>
              </div>
            </form>
          </div>
          <div className='col s2' style={{padding: '0'}}>
            <div style={{background: 'linear-gradient(grey, #62c7ff)', width: '100%', height: '100vh'}}></div>
          </div>

        </div>
      </div>
    );
  }
}

export default Contact;
