import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('body').css('background-image', "url(http://res.cloudinary.com/omash612/image/upload/v1490317816/contactLightning_efekyc.jpg)");
    $('body').css('background-size', 'cover');
    $('body').css('bacground-repeat', 'no-repeat');
    $('body').css('height', '100vh');
  }

  componentWillUnmount() {
    $('body').css('background-image', 'none');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.refs.contactForm.reset();

    Materialize.toast('Your message has been sent! Thank you!', 7000, 'toasted');
  }

  render() {
    return(
      <div>
        <div className='row' style={{margin: '35px 0 0 15px'}}>
          <div className='col s12 m5' style={{backgroundColor: 'rgba(186, 186, 186, 0.2)', borderRadius: '10px'}}>
            <h1 className='center white-text'> Contact Brent </h1>
            <form onSubmit={this.handleSubmit} ref='contactForm'>
              <div className='row'>
                <div className='col s12 m6'>
                  <label className='left white-text'> First Name: </label>
                  <input type='text' className='white-text' required />
                </div>

                <div className='col s12 m6'>
                  <label className='left white-text'> Last Name: </label>
                  <input type='text' className='white-text' required />
                </div>
              </div>

              <div className='row'>
                <div className='col s12 m12'>
                  <label className='left white-text'> Email: </label>
                  <input type='text' className='white-text' required />
                </div>
              </div>

              <div className='row'>
                <div className='col s12 m6 offset-m3'>
                  <label className='left white-text'> Phone Number: </label>
                  <input type='text' className='white-text' />
                </div>
              </div>

              <div className='row'>
                <div className='col s12 m12'>
                  <label className='left white-text'> Message: </label>
                  <textarea type='text' className='white-text' required></textarea>
                </div>
              </div>

              <div className='row'>
                <div className='col s12 m12'>
                  <input type='submit' value='Send' className='btn blue right' style={{borderRadius: '5px'}} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
