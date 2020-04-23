import React from 'react';
import { Modal, Menu } from 'semantic-ui-react';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

class modal extends React.Component {
    loginTrue = () => {
      this.props.loginTrue()
    }

    render() {
        let form;
        if (this.props.title === "Sign Up") {
          form = <SignupPage loginTrue={this.loginTrue} />
        } else {
          form = <LoginPage loginTrue={this.loginTrue} />
        }
        return(
            <Modal trigger={<Menu.Item>{this.props.title}</Menu.Item>}>
                  <Modal.Header>{this.props.title}</Modal.Header>
                  <Modal.Content >
                    {form}
                  </Modal.Content>
            </Modal>
        )
    }
}


export default modal;