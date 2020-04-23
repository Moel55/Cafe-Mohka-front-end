import React from 'react';
import Post from '../../components/Posts/Post';
import UserAPI from '../../api/UserAPI';
import PostModal from '../../components/Posts/PostModal'
import './PostContainer.css';

class PostContainer extends React.Component {
    state = {
        posts: this.props.posts,
        pathName: "",
        show: false
    }

    showModal = e => {
        this.setState({
          show: !this.state.show
        });
    };

    handleClose = (e) => {
        this.setState({
            show: !this.state.show
        });
    };

    updatePosts = () => {
        UserAPI.postIndex()
        .then(res => {
            let itemPost = res.data.filter((post) => {
                return post.item._id === this.props.itemId
            })
            itemPost.reverse()
            this.setState({
                posts: itemPost,
            })}
      );
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.posts && nextProps.posts.length === this.props.posts.length) {
            return false;
        };
        return true;
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {

            // post index
            const pathName = window.location.pathname;
        
        UserAPI.postIndex()
        .then(res => {
            if (pathName === '/profile') {
                let userPost = res.data.filter((post) => {
                    return post.user._id === this.props.id
                    
                })
                userPost.reverse();
                this.setState({
                    posts: userPost,
                    pathName: pathName
                });
            } else {
                
                let itemPost = res.data.filter((post) => {
                    return post.item._id === this.props.itemId
                })
                itemPost.reverse();
                this.setState({
                    posts: itemPost,
                    pathName: pathName
                })}
          });

        };
    };

    render() {
        let posts = this.state.posts;
        if (this.state.pathName === '/profile') {
            if (posts.length === 0) {
                return (
                    <div className="ui container segment profilePosts">
                        <h1>Posts</h1>
                        <p>You have not posts...</p>
                    </div>
                )
            }
            return(
                <div className="ui container segment profilePosts">
                    <h1>Posts</h1>
                    {posts && posts.map(post => {
                        return <Post post={post} key={post._id} />    
                    })}
                </div>
            );
        };

        return (
            <>
            <h2 className="itemPostHeader">Posts</h2>            
            <button id="centered-toggle-button" className="ui button" onClick={e => {this.showModal()}}>Add Post</button>
            <PostModal show={this.state.show} itemId={this.props.itemId} user={this.props.user} onClose={this.handleClose} update={this.updatePosts}/>
            <div className="ui cards">
                {posts && posts.map(post => {
                    return <Post post={post} user={this.props.user} update={this.updatePosts} key={post._id} />
                })}
                </div>
            </>
        )
    }
}

export default PostContainer;