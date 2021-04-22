import React from 'react';
import { Route, Switch } from 'react-router';

import GraphComponent from './GraphComponent';
import NavBar from './NavBar';
import PageNotFound from './PageNotFound';
import RedditComponent from './RedditComponent';
import SignInForm from './SignInForm';
import YahooComponent from './YahooComponent';

import '../scss/App.scss';

function App() {
	return (
		<React.Fragment>
			<NavBar />

			<Switch>
				<Route exact path='/(sign[_ -]{0,1}in)' render={() => <SignInForm />} />
				<Route exact path='/'>
					<div className='App'>
						<RedditComponent />
						<GraphComponent />
						<YahooComponent />
					</div>
				</Route>
				<Route path='*' render={() => <PageNotFound />} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
