import React from 'react';
import UserAPI from '../../api/UserAPI';
import './Profile.css';
import PostContainer from '../../container/PostContainer/PostContainer';


class Profile extends React.Component {
    state = {
        user: {
            
        },
        formStyle: {
            display: 'none',
        },
        messageStyle: {
            display: 'none',
        },
    }

    validateFields = () => {
        // Puts state keys in keys array
        let keys = ['username','item']
        let valid = true
        keys.map(key => {
            let field = document.getElementById(key);
            field.classList.remove('error');
            if (field.value === '') {
                valid = false;
                // add class error to fields
                field.classList.add('error');
            }
        })
        return valid;
    }

    toggleBodyForm = () => {
        this.state.formStyle.display === 'block'
        ? this.setState({ formStyle: {display: 'none' } })
        : this.setState({ formStyle: {display: 'block'} });
    }

    toggleFormMessage = () => {
        this.state.messageStyle.display === 'block'
        ? this.setState({ messageStyle: {display: 'none' } })
        : this.setState({ messageStyle: {display: 'block'} });
    }

    submit = (event) => {
        event.preventDefault();
        if (this.validateFields())
            this.updateProfile({
                _id: this.state.user._id,
                username: document.getElementById('username').value,
                item: document.getElementById('item').value
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.currentUser._id !== this.props.currentUser._id) {
            this.setState({
                user: this.props.currentUser
            });

            UserAPI.show(this.props.currentUser._id)
            .then(res => {
                this.setState({
                    user: res.data
                })
            })
        }
    }
    componentDidMount() {
        this.setState({
            user: this.props.currentUser
        });

        UserAPI.show(this.props.currentUser._id)
        .then(res => {
            this.setState({
                user: res.data
            })
        })
    }

    changeField = (event) => {
        if (this.state.formStyle.display === "none") {
            this.toggleBodyForm()
            if (this.state.messageStyle.display === "block")
                this.toggleFormMessage();
        }
    }

    updateProfile = user => {
        UserAPI.update(user)
            .then((res) => {
                this.toggleBodyForm();
                this.toggleFormMessage();
                this.props.loggedIn(res.data);
                this.setState({ user : res.data});
            })
    }

    setNewProfileLink = (link) => {
        if (this.state.user && this.state.user) {
            let updatedUser = {
                _id: this.state.user._id,
                photo: link
            }
            UserAPI.update(updatedUser).
                then((res) => res)
        };
    };

    render(){
        let date = new Date(this.state.user.createdAt);
        return(
            <>
        <div className="ui container segment" id="container-segment">

            {/* <img className="ui centered medium image" id="circular-image" src={this.state.imgSrc ? this.state.imgSrc : this.state.user.photo}/> */}
          <div className="joinDate">Join Date: {date.toLocaleDateString()}</div>  
          {/* <UploadPhoto setNewProfileLink={ this.setNewProfileLink }/> */}

            <form className="ui form profileForm" onSubmit={this.submit}>
                <div className="fields" style={{flexDirection: "column"}}>
                    <div className="field">
                    <label>Username:</label>
                    <input name="firstName" id="firstName" type="text" onInput={this.changeField} defaultValue={this.props.currentUser.firstName} placeholder={this.state.user.firstName}/>
                    </div>
                    <div className="field">
                    <label>Email:</label>
                    <input name="lastName" id="lastName" type="text" onInput={this.changeField} defaultValue={this.state.user.lastName} placeholder={this.state.user.lastName}/>
                    </div>
                    <div className="field">
                    <label>Item:</label>
                    <input name="city" id="city" type="text" onInput={this.changeField} defaultValue={this.state.user.city} placeholder={this.state.user.city}/>
                    </div>
                </div>
                <div className="ui success message" style={this.state.messageStyle}>
                <div className="header">Profile Updated!</div>
                <p>Your profile has successfully been updated.</p>
            </div>
                <button className="ui submit button profile" style={this.state.formStyle}>Update Profile</button>
            </form>
        </div>
        <PostContainer id={this.state.user._id}/>
        </>
        )
    }
}
export default Profile;















// import React from "react";
// import { Modal, Form, Button, Grid } from "semantic-ui-react";
// import UserAuthAPI from "../../api/UserAuthAPI";
// import UserAPI from "../../api/UserAPI";;
// //import ItemList from "../ItemList/ItemList"
// import "./Profile.css";

// const endpoint = "http://localhost:4000/api/v1/users";

// class Profile extends React.Component {
//   state = {
//     username: "",
//     password: "",
//     email: "",
//     purchases: [],

//     modalOpen: false,
//   };

//   getUser = () => {
//     let userId;
//     let user;

//     UserAuthAPI.verify().then((res) => {
//       userId = res.currentUser._id;

//       UserAPI.getUser(userId).then((res) => {
//         console.log(res);
//         user = res;

//         for (let i = 0; i < user.purchases.length; i++) {
//           console.log(user.purchases[i]);
//           this.state.purchases.push(user.purchases[i]);
//         }

//         this.setState({
//           username: user.username,
//           email: user.email,
//           password: user.password,
//           createdAt: user.createdAt,
//         });
//       });
//     });
//   };

//   updateUser = () => {
//     let userId;

//     const updatedUser = {
//       username: this.state.username,
//       password: this.state.password,
//       confirmPassword: this.state.confirmPassword,
//       email: this.state.email,
//       purchases: this.state.purchases,
//     };

//     UserAuthAPI.verify().then((res) => {
//       console.log(res.currentUser._id);
//       userId = res.currentUser._id;
//       console.log(userId);

//       UserAPI.updateUser(userId, updatedUser).then((res) => console.log(res));
//     });
//   };

//   componentDidMount() {
//     this.getUser();
//   }

//   handleChange = (event, { name, value }) => {
//     console.log(name, value);
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleOpen = () => {
//     this.setState({ modalOpen: true });
//   };

//   handleClose = () => {
//     this.setState({ modalOpen: false });
//   };

//   handleSubmit = (e) => {
//     this.updateUser();
//     this.handleClose();
//   };

//   render() {
//     const { username, password, email} = this.state;
//     return (
//       <div className="Profile">
//         <Grid>
//           <Grid.Row>
//             <Grid.Column width={6}>
//               <div className="user-info">
//                 <h3>{this.state.username}</h3>
//                 <p>{this.state.password}</p>
//                 <p>{this.state.email}</p>
//                 <Modal
//                   open={this.state.modalOpen}
//                   trigger={
//                     <Button onClick={this.handleOpen}>Edit Account</Button>
//                   }
//                 >
//                   <Modal.Header>Update Your Information</Modal.Header>
//                   <Modal.Content>
//                     <Form onSubmit={this.handleSubmit}>
//                       <Form.Input
//                         fluid
//                         label="Username"
//                         placeholder="username"
//                         id="form-input-username"
//                         name="username"
//                         value={username}
//                         onChange={this.handleChange}
//                       />
//                       <Form.Input
//                         fluid
//                         label="Email"
//                         placeholder="email"
//                         name="email"
//                         value={email}
//                         onChange={this.handleChange}
//                       />
//                       <Form.Input
//                         fluid
//                         label="Purchases"
//                         placeholder="purchases"
//                         name="purchases"
//                         value={this.state.purchases}
//                         onChange={this.handleChange}
//                       />
//                       <Form.Button fluid type="submit">
//                         Submit Changes
//                       </Form.Button>
//                       <Button fluid onClick={this.handleClose}>
//                         Cancel
//                       </Button>
//                     </Form>
//                   </Modal.Content>
//                 </Modal>
//               </div>
//             </Grid.Column>
//             <Grid.Column width={10}>
//               <h3 className="profile-purchase-title">Your Items</h3>
//               <PostContainer posts={this.state.purchases} />
//             </Grid.Column>
//           </Grid.Row>
//         </Grid>
//       </div>
//     );
//   }
// }

// export default Profile;