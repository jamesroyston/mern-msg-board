import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import './Home.css';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions/actions';

class Home extends React.Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const { posts } = this.props;
		const postList = posts.length ? (
			posts.reverse().map(post => {
				return <div className="post card home" key={post._id}>
					<img className="post-image" src={logo} alt="react logo"/>
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
			<div className="center">
                No posts yet
			</div>
		);

		return (
			<div className="row container">
				<div className="col s3"></div>
				<div className="col s9">
					{postList}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.home.posts,
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