import React, { useState } from 'react';

import '../scss/RedditComponent.scss';

function RedditComponent() {
	const [flair, setFlair] = useState('');

	/**
	 * @param {React.SyntheticEvent<HTMLButtonElement>} event
	 */
	const handleClick = event => {
		event.preventDefault();
		setFlair(event.currentTarget.innerText.trim());
	};

	return (
		<section id='reddit'>
			<div className='navigation'>
				<button
					className='flair-button'
					style={{ backgroundColor: '#365b8c' }}
					onClick={handleClick}
					data-descr='Due Dilligence'
				>
					DD
				</button>
				<button
					className='flair-button'
					style={{ backgroundColor: 'green' }}
					onClick={handleClick}
					data-descr='People made it big'
				>
					Gain
				</button>
				<button
					className='flair-button'
					style={{ backgroundColor: 'red' }}
					onClick={handleClick}
					data-descr='People lost a lot'
				>
					Loss
				</button>
				<button
					className='flair-button'
					style={{ backgroundColor: 'goldenrod' }}
					onClick={handleClick}
					data-descr='Stock News'
				>
					News
				</button>
				<button
					className='flair-button'
					style={{ backgroundColor: 'darkcyan' }}
					onClick={handleClick}
					data-descr='Risky Positions'
				>
					YOLO
				</button>
				<button
					className='flair-button'
					style={{ backgroundColor: 'rebeccapurple' }}
					onClick={handleClick}
					data-descr='Talk about Stocks'
				>
					Discussion
				</button>
				<button
					className='flair-button'
					style={{ backgroundColor: 'darkorange' }}
					onClick={handleClick}
					data-descr='Graphs drawn by people'
				>
					Chart
				</button>
			</div>

			<div className='viewport'>PLACEHOLDER</div>
		</section>
	);
}

export default RedditComponent;
