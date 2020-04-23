import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./Nav.css";
import UserAPI from "../../api/UserAPI";
import { withRouter } from "react-router-dom";
import Modal from "../Modal/Modal";
    

class Nav extends Component {
  state = {
    loggedIn: false,
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogOut = () => {
    UserAPI.logout()
      .then(() => this.loginFalse())
      .then(() => this.props.history.push("/"))
      .catch((err) => console.log(err));
  };

  loginTrue = () => {
    this.setState({
      loggedIn: true,
    });
  };

  loginFalse = () => {
    this.setState({
      loggedIn: false,
    });
  };

  componentDidMount = () => {
    UserAPI.verify().then((res) => {
      if (res.status === 200) {
        this.setState({
          loggedIn: true,
        });
      }
    });
 };

  render() {
    const { activeItem } = this.state;

    return (
      <div className="NavBar">
        <Menu size="huge" inverted>
          <Menu.Item
            name="Cafe Mohka"
            active={activeItem === "Cafe Mohka"}
            onClick={this.handleItemClick}
            className="logo"
          >
           Cafe Mohka
          </Menu.Item>

          <Menu.Menu position="right">
            {!this.state.loggedIn && (
              <>
                <Modal title={"Log In"} loginTrue={this.loginTrue} /> 
                <Modal title={"Sign Up"} loginTrue={this.loginTrue} />
              </>
            )}

            {this.state.loggedIn && (
              <>
                <Menu.Item name="Menu" as={Link} to="/menu">
                  Menu
                </Menu.Item>

                <Menu.Item name="Cart"as={Link}  to="/cart">
                  Cart
                </Menu.Item>

                <Menu.Item name="Log Out" onClick={this.handleLogOut}>
                  Log Out
                </Menu.Item>
              </>
            )}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Nav);









// class Nav extends React.Component {
//   render() {
//   let leftLinks = [];
//   let rightLinks = [];

//   let notLoggedLabels = ['Cafe Mohka', 'Log In', 'Sign Up'];
//   let notLoggedLeftLinks = {
//       '/': "item",
//   };
//   let notLoggedRightLinks = { 
//       '/login': "ui inverted button",
//       '/signup': "ui inverted button"
//   };

//   let loggedLabels = ['Cafe Mohka', 'Profile', 'Items', 'Sign Out'];
//   let loggedLeftLinks = { 
//       '/': "item",
//       '/profile': "item",
//       '/items/title': "item" 
//   };
//   let loggedRightLinks = { 
//       '/': "ui inverted button",
//   };

//   if (!this.props.loggedIn) {
//       //if user not loggedin
//       let idx = 0;
//       for (let key in notLoggedLeftLinks) {
//           leftLinks.push(<Link to={ key } key={ idx } className={ notLoggedLeftLinks[key] }>{notLoggedLabels[idx]}</Link>);
//           idx += 1;
//       };

//       for (let key in notLoggedRightLinks) {
//           rightLinks.push(<Link to={ key } key={ idx } className={ notLoggedRightLinks[key] }>{notLoggedLabels[idx]}</Link>);
//           idx += 1;
//       };
//   }
//   else {
//       // user is loggedin
//       let idx = 0;
//       for (let key in loggedLeftLinks) {
//           leftLinks.push(<Link to={ key } key={ idx } className={ loggedLeftLinks[key] }>{loggedLabels[idx]}</Link>);
//           idx += 1;
//       };

//       for (let key in loggedRightLinks) {
//           rightLinks.push(<Link onClick={this.props.logout} to={ key } key={ idx } className={ loggedRightLinks[key] }>{loggedLabels[idx]}</Link>);
//           idx += 1;
//       };
//   }
//       return (
//           <div className="pusher">
//               <div className="ui container">
//                   <div className="ui large secondary inverted pointing menu">
//                       <a className="toc item">
//                       <i className="sidebar icon"></i>
//                       </a>
//                           {leftLinks}
//                       <div className="right item">
//                           {rightLinks}
//                       </div>
//                   </div>
//               </div>
//           </div>
//       )
//   }
// }

// export default withRouter(Nav);