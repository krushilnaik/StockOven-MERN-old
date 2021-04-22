import React from 'react';
import { Route, Switch, useHistory } from 'react-router';

import GraphComponent from './GraphComponent';
import RedditComponent from './RedditComponent';
import YahooComponent from './YahooComponent';
import NavBar from './NavBar';
import SignInForm from './SignInForm';

import '../scss/App.scss';

function App() {
	let history = useHistory();

	// @ts-ignore
	const logOut = event => {
		// log user out
		// redirect to sign in page
		history.push('/sign_in');
	};

	return (
		<React.Fragment>
			<NavBar />

			<Switch>
				<Route exact path='/sign_in' render={() => <SignInForm />} />
				<Route exact path='/'>
					<div className='App'>
						<RedditComponent />
						<GraphComponent />
						<YahooComponent />
					</div>
				</Route>
			</Switch>
		</React.Fragment>
	);
}

export default App;
