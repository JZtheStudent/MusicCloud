import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value 
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.processForm({username: 'demo-user', password: '123456'}).then(this.props.closeModal);
  }
  
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() { 
    return (  
      <div className="login-form-container">
        <form  className="login-form-box" onSubmit={this.handleSubmit}>
          <h2>Welcome to MusicCloud!</h2>
          
          Please {this.props.formType} or {this.props.otherForm}

          <div onClick={this.props.closeModal} className="close-x">X</div>
          {/* {this.renderErrors()} */}
          <div className="login-form">
            <button className="demo-login-button" onClick={this.handleDemoLogin}>Demo Login</button>
            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            {
              (this.props.formType === 'signup') ? 
                <label>Email:
                  <input 
                    type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                  />
                  
                </label> 
                 :
                <div></div>
            }
            <label>Password:
              <input 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <input className="form-submit-button" type="submit" value={this.props.formType}/>
          </div>
        </form>
      </div>
    );
  }
}
 
export default withRouter(SessionForm);