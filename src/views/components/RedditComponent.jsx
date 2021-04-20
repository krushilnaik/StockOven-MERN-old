import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

import '../scss/RedditComponent.scss';
import RedditPost from './RedditPost';

/**
 * @typedef PostModel - abstraction of a Reddit post's JSON representation
 * @property {string} title - post's title
 * @property {string} author - post's author
 * @property {string} link_flair_text - post's assigned flair
 * @property {string} permalink - link to post on reddit
 * @property {number} score - post's approximate net score (upvotes - downvotes)
 * @property {string} id - post's id, mainly to use as a key in a list of Components
 */

function RedditComponent() {
	const [flair, setFlair] = useState('');
	const [loading, setLoading] = useState(true);

	/**
	 * @type {{current: PostModel[]}}
	 */
	let posts = useRef([]);

	// make call to reddit's api
	useEffect(() => {
		axios
			.get('https://www.reddit.com/r/wallstreetbets/hot.json')
			.then(({ data }) => {
				posts.current = data.data.children.map(({ data }) => data);
			})
			.then(_ => {
				setLoading(false);
			});
	}, []);

	/**
	 * @param {React.SyntheticEvent<HTMLButtonElement>} event
	 */
	const handleClick = event => {
		event.preventDefault();
		setFlair(event.currentTarget.innerText.trim());
	};

	/**
	 * @param {{message: string}} props
	 */
	const NoReddit = props => {
		const { message } = props;
		return (
			<div className='no-reddit'>
				<img
					className={loading ? 'loading' : ''}
					src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Reddit_glyph_svg-512.png'
					alt='reddit logo'
				/>
				<span>{loading ? 'Fetching posts...' : message}</span>
			</div>
		);
	};

	let relevantPosts = posts.current.filter(post => post.link_flair_text === flair);

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

			<div className='viewport'>
				{flair ? (
					// attempt to display posts with the selected flair
					relevantPosts.length !== 0 ? (
						relevantPosts
							.filter(post => post.link_flair_text === flair)
							.map(props => React.createElement(RedditPost, props))
					) : (
						// if no posts were found, say so
						<NoReddit message={`No posts found with flair '${flair}'`} />
					)
				) : (
					<NoReddit message="Pick a flair to view today's hot posts" />
				)}
			</div>
		</section>
	);
}

export default RedditComponent;
