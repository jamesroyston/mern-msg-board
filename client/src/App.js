import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Secret from './components/Secret';
import Register from './components/Register';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import withAuth from './hoc/withAuth';

class App extends React.Component {

	render() {
	
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Switch>
						<Route path='/home' component={withAuth(Home)}/>
						<Route path="/login" component={Login} />
						<Route exact path="/" component={withAuth(Home)} />
						<Route path="/secret" component={withAuth(Secret)}/>
						<Route path="/register" component={Register}/>
						<Route path='/new_post' component={withAuth(CreatePost)} />
						<Route path="/:post_id" component={withAuth(Post)} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
		
}
		
export default App;
