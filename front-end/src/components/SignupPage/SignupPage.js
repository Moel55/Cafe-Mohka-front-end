import React from 'react';
import './Signup.css';
import userAPI from '../../api/UserAPI';
import { withRouter } from 'react-router-dom';
class SignupPage extends React.Component {

    state = {
        username: '',
        email: '',
        password: '',
    }
    validateFields = () => {
        let keys = []
        // Puts state keys in keys array
        Object.keys(this.state).map(key => keys.push(key));
        let valid = true
        keys.map(key => {
            let field = document.getElementById(key);
            field.classList.remove('error');
            if (this.state[key] === '') {
                valid = false;
                // add class error to fields
                field.classList.add('error');
            }
        })
        return valid;
    }
    passwordValid = (password) => {
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&])(?=.{8,})")
        return (strongRegex.test(password)) && (password.length >= 8) ? true : false
    }
    emailValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    register = () => {
        userAPI.signup(this.state)
        .then(res => {
            // call function handler
            this.props.loggedIn(res.data.user);
            // Redirect to profile
        });
    }
    updateState = (event) => {
        this.setState({
            [event.target.username]: event.target.value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        if (!this.validateFields())
            return
        // validate password and email
        if (!this.passwordValid(this.state.password)) {
            let field = document.getElementById('password');
            field.classList.add('error');
            if (!this.emailValid(this.state.email)) {
                let field = document.getElementById('email');
                field.classList.add('error');
                return
            }
            return
        }
        if (!this.emailValid(this.state.email)) {
            let field = document.getElementById('email');
            field.classList.add('error');
            return
        }
        else 
            this.register()
    }
    render() {
        return(
            <>
            <h2 id="formTitle">Sign-Up</h2>
            <form onSubmit={this.onSubmit} className="ui form signupForm">
                <div className="two fields">
                    <div id="email" className="field">
                        <label>Email</label>
                        <input onInput={this.updateState} name="email" id="email" type="text" placeholder="Email"/>
                    </div>
                    <div id="password" className="field">
                        <label>Password</label>
                        <input onInput={this.updateState} name="password" id="password" type="password"/>
                    </div>
                </div>
                <div className="two fields">
                    <div id="firstName" className="field">
                        <label>Username</label>
                        <input onInput={this.updateState} name="firstName" type="text" placeholder="First Name"/>
                    </div>
                    {/* <div id="lastName" className="field">
                        <label>Last name</label>
                        <input name="lastName" onInput={this.updateState} name="lastName" type="text" placeholder="Last Name"/>
                    </div> */}
                </div>
                {/* <div id="item" className="field">
                    <label>Item</label>
                    <input onInput={this.updateState} name="item" type="text" placeholder="Item"/>
                </div> */}
                <button className="ui submit black button submitButton">Sign Up</button>
            </form>
            </>
        );
    }
}

export default withRouter(SignupPage);









// import React from 'react'
// import { Form } from 'semantic-ui-react'
// import UserAuthAPI from '../../api/UserAuthAPI';
// import { withRouter } from "react-router-dom";
// //

// class SignUpPage extends React.Component {
//   state={
//     username: '',
//     password: '',
//     confirmPassword: '',
//     email: '',
//   }

//   handleChange = (e, {name, value }) => this.setState({ [name]: value })

//   loginTrue = () => {
//     this.props.loginTrue();
//   }

//   handleSubmit = () => {
//     let errorFound = false;

//     if (this.state.password !== this.state.confirmPassword) {
//       errorFound = true;
//       console.log('Password fields do not match');
//     }

//     if (!errorFound) {
//     let newUser = {
//       username: this.state.username,
//       password: this.state.password,
//       email: this.state.email,
//     }

//     UserAuthAPI.signUp(newUser)
//       .then(res => {
//         UserAuthAPI.login(newUser)
//         .then(() => this.loginTrue())
//         .then(() => this.props.history.push('/profile'))
//       })
//       .catch(err => console.log(err))
//   }
// }

//   render () {
//     const { username, password, confirmPassword, email } = this.state
//     return (
//       <Form className="signup" onSubmit={this.handleSubmit}>
//       <Form.Input required
//         error={this.state.usernameError ? 'Please enter your username' : null}
//         fluid
//         label='Username'
//         placeholder='username'
//         id='form-input-username'
//         name='username'
//         value={username}
//         onChange={this.handleChange}
//       />
//       <Form.Input required
//         error={this.state.passwordError ? 'Please enter your password' : null}
//         fluid
//         label='Password'
//         placeholder='password'
//         name='password'
//         value={password}
//         type="password"
//         onChange={this.handleChange}
//       />
//         <Form.Input required 
//         error={this.state.passwordConfirmError ? 'Please confirm your password' : null}
//         fluid
//         label='Confirm Password'
//         placeholder='confirm password'
//         name='confirmPassword'
//         value={confirmPassword}
//         type="password"
//         onChange={this.handleChange}
//       />
//       <Form.Input required
//         error={this.state.emailError ? 'Please enter your email' : null}
//         fluid
//         label='Email'
//         placeholder='email'
//         name='email'
//         value={email}
//         onChange={this.handleChange}
//       />
//       <Form.Button
//         fluid
//         type="submit"
//         disabled={!this.state.username
//         || !this.state.password
//         || !this.state.confirmPassword
//         || !this.state.email
//       }
//       >Create Account</Form.Button>
//     </Form>
//     )
//   }
// }

// export default withRouter(SignUpPage);