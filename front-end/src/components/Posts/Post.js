import React from 'react';
import './Post.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import DeleteModal from './PostModalDelete';
import UpdateModal from './PostModalUpdate';


class Post extends React.Component {
  state = {
    show: false,
    inUpdate: false
}

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
};

  showUpdateModal = e => {
    this.setState({
      inUpdate: !this.state.inUpdate
    });
  };

  handleClose = (e) => {
    this.setState({
        show: !this.state.show
    });
  };

  handleUpdateClose = (e) => {
    this.setState({
        inUpdate: !this.state.inUpdate
    });
  };  

    delete = () => {
      this.showModal()
    }

    update = () => {
      this.showUpdateModal()
    }

    render() {
        const pathName = window.location.pathname;
        let itemName = this.props.post.item.name
        itemName = itemName.replace(/\s+/g, '-').toLowerCase();
        // profile posts
        if (pathName === '/profile') {          
            return (
                <div className="postLink">
                    <Link to={{
                    pathname: `/items/${itemName}`,
                   }}><img className="ui avatar image" src={this.props.post.item} alt=""/>{this.props.post.title}</Link>
                </div> 
            )
        }
        // item posts
        let extraContent = []
        if (this.props.post.user._id === this.props.user._id) {
            extraContent.push(<><button className="ui green button" onClick={this.update}>
            Update
          </button>
          <button className="ui red button" onClick={this.delete}>
            Delete
          </button></>);
        }
        return(
            <div className="card">
              <DeleteModal show={this.state.show} post={this.props.post} onClose={this.handleClose} update={this.props.update}/>
              <UpdateModal inUpdate={this.state.inUpdate} post={this.props.post} onClose={this.handleUpdateClose} update={this.props.update}/>
              <div className="content">
              <img className="right floated mini ui image" src={this.props.post.user} alt=""/>
              <div className="header">
                  {this.props.post.title}
              </div>
              <div className="meta">
                  {this.props.post.user.username + " " + this.props.post.user.username}
              </div>
              <div className="description">
                  {this.props.post.body}
              </div>
            </div>
            <div className="extra content">
                {extraContent}
            </div>
        </div>
        )
    }
}

export default withRouter(Post);