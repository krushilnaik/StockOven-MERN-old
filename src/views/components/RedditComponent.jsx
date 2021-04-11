import React from 'react';

import '../scss/RedditComponent.scss';

function RedditComponent() {
	return (
		<section id='reddit'>
			<div className='navigation'>
				<div className='flair-button' style={{ backgroundColor: '#365b8c' }} data-descr='Due Dilligence'>
					DD
				</div>
				<div className='flair-button' style={{ backgroundColor: 'green' }} data-descr='People made it big'>
					Gain
				</div>
				<div className='flair-button' style={{ backgroundColor: 'red' }} data-descr='People lost a lot'>
					Loss
				</div>
				<div className='flair-button' style={{ backgroundColor: 'goldenrod' }} data-descr='Stock News'>
					News
				</div>
				<div className='flair-button' style={{ backgroundColor: 'darkcyan' }} data-descr='Risky Positions'>
					YOLO
				</div>
				<div className='flair-button' style={{ backgroundColor: 'rebeccapurple' }} data-descr='Talk about Stocks'>
					Discussion
				</div>
				<div className='flair-button' style={{ backgroundColor: 'darkorange' }} data-descr='Graphs drawn by people'>
					Chart
				</div>
			</div>

			<div className='viewport'>PLACEHOLDER</div>
		</section>
	);
}

export default RedditComponent;
