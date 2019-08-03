import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions/actions';

class Home extends React.Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		console.log(this.props);
		const { posts } = this.props;
		const postList = posts.length ? (
			posts.reverse().map(post => {
				return <div className="post card home" key={post._id}>
					<div className="card-content">
						<Link to={'/' + post._id}>
							<span className="card-title">
								{post.title}
							</span>
						</Link>
						<p>{post.description}</p>
					</div>
				</div>;
			})
		) : (
			<h4 className="title is-4">
                No posts yet
			</h4>
		);

		return (
			<div className="container">
				<div className="">
					{postList}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.home.posts,
		user: state.user
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPosts: () => {
			dispatch(fetchPosts());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);