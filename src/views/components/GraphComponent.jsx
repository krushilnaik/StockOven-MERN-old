import React from 'react';

import '../scss/GraphComponent.scss';
import ToggleGroup from './ToggleGroup';

function GraphComponent() {
	return (
		<section id='graph'>
			<div className='apex-chart'>PLACEHOLDER GRAPH</div>
			<div className='toggles'>
				<ToggleGroup id='ranges' values={['1d', '5d', '1mo']} />
				<ToggleGroup id='intervals' values={['5m', '15m', '60m', '1d']} />
			</div>
		</section>
	);
}

export default GraphComponent;
