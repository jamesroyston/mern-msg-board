import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Post from './components/Post'
import CreatePost from './components/CreatePost'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/new_post' component={CreatePost} />
                    <Route path="/:post_id" component={Post} />
                </Switch>
            </div>
        </BrowserRouter>
      );
}

export default App;
