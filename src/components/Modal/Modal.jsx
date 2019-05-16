import React from "react";
import axios from 'axios';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      fullName: '',
      email: '',
      cEmail: '',
      fullNameError: false,
      emailError: false,
      cEmailError: false,
      sending: false,
      error: null,
      sent: false
    };

    this.validations = {
      fullName: /.+/,
      email: /^[A-Za-z0-9]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    };

    this.state = Object.assign({}, this.defaultState);
  }

  fieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  submit = () => {
    console.log('submit');
    let fullNameError = false;
    let emailError = false;
    let cEmailError = false;
    if (!this.validations.fullName.test(this.state.fullName)) {
      fullNameError = true;
    }

    if (!this.validations.email.test(this.state.email)) {
      emailError = true;
    }

    if (!this.validations.email.test(this.state.cEmail) || (this.state.email != this.state.cEmail)) {
      cEmailError = true;
    }

    if (!fullNameError && !emailError && !cEmailError) {
      this.sendRequest();
    }
    this.setState({
      fullNameError: fullNameError,
      emailError: emailError,
      cEmailError: cEmailError
    });
  };

  sendRequest = () => {
    const self = this;
    this.setState({
      sending: true
    });

    axios.post('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth', {
      name: this.state.fullName,
      email: this.state.email
    })
    .then(function (res) {
      self.setState({
        sending: false,
        sent: true,
        error: false
      });
    })
    .catch(function (error) {
      console.log(error);
      self.setState({
        sending: false,
        error: error.response.data.errorMessage || 'Somethinkg went wrong, please try again later'
      });
    });
  };

  clickCloseModal = () => {
    this.setState(Object.assign({}, this.defaultState));
    this.props.closeModal();
  }

  render() {
    return (
      <div className="modal">
        <div className="modal__content">
          <div className="modal__title">Request an invite</div>
          <div className="modal__dividor"></div>
          { this.state.sent? (
            <div className="modal__finish">
              <div className="modal__subtitle">You will be one of the first to experience Broccoli & Co. when we launch.</div>
              <div className="modal__submit" onClick={this.clickCloseModal}>OK</div>
            </div>
          ) : (
            <div className="modal__form">
              <input
                className={this.state.fullNameError? 'modal__input modal__input--error' : 'modal__input'} 
                type="text"
                name="fullName"
                value={this.state.fullName}
                placeholder="Full name"
                onChange={this.fieldChange}
              />
              <input 
                className={this.state.emailError? 'modal__input modal__input--error' : 'modal__input'} 
                type="text"
                name="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.fieldChange}
              />
              <input 
                className={this.state.cEmailError? 'modal__input modal__input--error' : 'modal__input'} 
                type="text"
                name="cEmail"
                value={this.state.cEmail}
                placeholder="Confirm email"
                onChange={this.fieldChange}
              />
              <div 
                className={this.state.sending? 'modal__submit modal__submit--sending' : 'modal__submit'}
                onClick={this.submit}
              >
                {this.state.sending? 'Sending' : 'Send'}
              </div>
              { this.state.error && <div className="modal__error">{ this.state.error }</div> }
            </div>
          ) }
        </div>
      </div>
    );
  }
}

export default Modal;
