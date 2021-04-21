import React from 'react';

import '../scss/App.scss';

import GraphComponent from './GraphComponent';
import RedditComponent from './RedditComponent';
import YahooComponent from './YahooComponent';
import SearchBar from './SearchBar';
import { Route, Switch } from 'react-router';
import SignInForm from './SignInForm';

function App() {
	return (
		<React.Fragment>
			<nav>
				<div className='left'>
					<img src='' alt='' id='logo' />
					<span id='brand-name'>StockOven</span>
				</div>

				<SearchBar />
			</nav>

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
