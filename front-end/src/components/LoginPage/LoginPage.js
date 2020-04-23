import React from 'react'
import { Form } from 'semantic-ui-react';
import UserAPI from '../../api/UserAPI';
import { withRouter } from "react-router-dom";
import './Login.css';
// import profile from '../Profile/Profile'


class LoginPage extends React.Component {
  state = {
      username: '',
      password: '',
  }

  handleChange = (e, {name, value }) => this.setState({ [name]: value })

  loginTrue = () => {
    this.props.loginTrue();
  }

  handleSubmit = () => {
    let currentUser = {
      username: this.state.username,
      password: this.state.password
    }

    UserAPI.login(currentUser)
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res;
      })
      .then(() => this.loginTrue())
      .then(() => this.props.history.push('/profile'))
      .catch(err => console.log(err))
    }

  render () {
      const { password, username } = this.state
      return (
          <Form onSubmit={this.handleSubmit}>
          <Form.Input required
            error={this.state.usernameError ? 'Please enter your username' : null}
            fluid
            label='Username'
            placeholder='username:'
            id='form-input-username'
            name='username'
            value={username}
            onChange={this.handleChange}
          />
          <Form.Input required
            error={this.state.passwordError ? 'Please enter your password' : null}
            fluid
            label='Password'
            placeholder='password'
            name='password'
            value={password}
            type="password"
            onChange={this.handleChange}
          />
          <Form.Button
          fluid
          type="submit"
          >Log In</Form.Button>
        </Form>
      )
  }
}

export default withRouter(LoginPage);



// class LoginPage extends React.Component {
//       state = {
//           username: '',
//           password: '',
//       }
//   login = () => {
//     UserAPI.login(this.state)
//     .then(res => {
//         this.props.loggedIn(res.data.user);
//         // this.props.history.push('/profile');
//     });
//   }

//   validateFields = () => {
//     let keys = []
//     // Puts state keys in keys array
//     Object.keys(this.state).map(key => keys.push(key));
//     let valid = true
//     keys.map(key => {
//         let field = document.getElementById(key);
//         field.classList.remove('error');
//         if (this.state[key] === '') {
//             valid = false;
//             // add class error to fields
//             field.classList.add('error');
//             // add label
//         }
//     })
//     return valid;
//   }

//   updateState = (event) => {
//     this.setState({
//         [event.target.name]: event.target.value
//     });
//   }

//   onSubmit = (event) => {
//     event.preventDefault();
//     if (this.validateFields())
//         this.login()
//   }

//   render() {
//     return(
//         <>
//         <h2 id="formTitle">Login</h2>
//         <form onSubmit={this.onSubmit} className="ui form loginForm">
//                 <div id="email" className="field">
//                     <label>Email</label>
//                     <input onInput={this.updateState} name="email" type="text" placeholder="Email"/>
//                     </div>
//                     <div id="password" className="field">
//                     <label>Password</label>
//                     <input onInput={this.updateState} name="password" type="password"/>
//                 </div>
//         <button className="ui submit black button submitButton">Login</button>
//     </form>
//     </>
//     );
//   }
// }

// export default withRouter(LoginPage);
