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
		const { posts } = this.props;
		const postList = posts.length ? (
			posts.reverse().map(post => {
				return <article className="media box">
					<figure className="media-left">
						<p className="image is-64x64">
							<img src="https://bulma.io/images/placeholders/128x128.png" />
						</p>
					</figure>
					<div className="media-content">
						<div className="content">
							<p>
								<strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
								<br/>
								{post.description}
							</p>
						</div>
						<nav className="level is-mobile">
							<div className="level-left">
								<a className="level-item">
									<span className="icon is-small"><i className="fas fa-reply"></i></span>
								</a>
								{/* <a className="level-item">
									<span className="icon is-small"><i className="fas fa-retweet"></i></span>
								</a> */}
								<a className="level-item">
									<span className="icon is-small"><i className="fas fa-heart"></i></span>
								</a>
							</div>
						</nav>
					</div>
					{/* <div className="media-right">
						<button className="delete"></button>
					</div> */}
				</article>;
			})
		) : (
			<h4 className="title is-4 box">
							No posts yet
			</h4>
		);
				
		return <div className="container" style={{marginTop: 2+'em'}}>
			<div className="columns">
				<div className="column is-one-third">
					<div className="box">
						<p className="title">@_USERNAME</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
					</div>
				</div>
				<div className="column is-two-thirds">
					{postList}
				</div>

			</div>
		</div>;
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
		},
				
	};
};
				
export default connect(mapStateToProps, mapDispatchToProps)(Home);