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
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Welcome to MusicCloud!</h2>
          Please {this.props.formType} or {this.props.otherForm}
          <div onClick={this.props.closeModal}>X</div>
          {/* {this.renderErrors()} */}
          <div>
            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            {
              (this.props.formType === 'signup') ? 
                <label>Email:
                  <input 
                    type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                  />
                  <br/>
                </label> 
                 :
                <br />
            }
            <label>Password:
              <input 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br />
            <input type="submit" value={this.props.formType}/>
          </div>
        </form>
      </div>
    );
  }
}
 
export default withRouter(SessionForm);