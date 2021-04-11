import React from 'react';

import '../scss/App.scss';

import GraphComponent from './GraphComponent';
import RedditComponent from './RedditComponent';
import YahooComponent from './YahooComponent';

function App() {
	return (
		<React.Fragment>
			<nav>
				<div className='left'>
					<img src='' alt='' id='logo' />
					<span id='brand-name'>StockOven</span>
				</div>

				<div className='right'>
					<input type='text' id='stock-search' />
				</div>
			</nav>

			<div className='App'>
				<RedditComponent />
				<GraphComponent />
				<YahooComponent />
			</div>
		</React.Fragment>
	);
}

export default App;
