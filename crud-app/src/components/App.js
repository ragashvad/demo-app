import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AuthorDetails from './AuthorDetails';

class App extends Component {
	render() {
    console.log(this.props.content)
		return (
			<div>
				<Router>
					<Header />
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/user" exact component={AuthorDetails} />
				</Router>
			</div>
		);
	}
}

export default App;
