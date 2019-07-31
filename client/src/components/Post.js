import React from 'react';
import { connect } from 'react-redux';
import { deletePost, fetchPosts } from '../store/actions/actions';

class Post extends React.Component {

	handleClick() {
		this.props.deletePost(this.props.post._id);
		this.props.fetchPosts();
		this.props.history.push('/');
	}

	render() {
		console.log(this.props);
		const post = this.props.post ? (
			<div className="post">
				<h4 className="">{this.props.post.title}</h4>
				<div>{this.props.post.description}</div>
				<div className="">
					<button className="btn" onClick={this.handleClick.bind(this)}>
                    Delete Post
					</button>

				</div>
			</div>
		) : (
			<div className="">
                loading post...
			</div>
		);

		return (
			<div className="container">
				{post}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.post_id;
	return {
		post: state.home.posts.find(post => post._id === id)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deletePost: (id) => {
			dispatch(deletePost(id));
		},
		fetchPosts: () => {
			dispatch(fetchPosts());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);