import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import withAuth from './hoc/withAuth';
import './App.sass';

class App extends React.Component {

	render() {
	
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup}/>
						<Route exact path="/" component={withAuth(Home)} />
						<Route path='/home' component={withAuth(Home)}/>
						<Route path='/new_post' component={withAuth(CreatePost)} />
						<Route path="/:post_id" component={withAuth(Post)} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
		
}
		
export default App;
