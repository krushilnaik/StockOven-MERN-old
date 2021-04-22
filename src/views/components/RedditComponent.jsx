import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import RedditPost from './RedditPost';

import '../scss/RedditComponent.scss';

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

	const sortButtons = [
		{ backgroundColor: '#365b8c', dataDescr: 'Due Dilligence', text: 'DD' },
		{ backgroundColor: 'green', dataDescr: 'People made it big', text: 'Gain' },
		{ backgroundColor: 'red', dataDescr: 'People lost a lot', text: 'Loss' },
		{ backgroundColor: 'goldenrod', dataDescr: 'Stock News', text: 'News' },
		{ backgroundColor: 'darkcyan', dataDescr: 'Risky Positions', text: 'YOLO' },
		{ backgroundColor: 'rebeccapurple', dataDescr: 'Talk about Stocks', text: 'Discussion' },
		{ backgroundColor: 'darkorange', dataDescr: 'Graphs drawn by people', text: 'Chart' }
	];

	return (
		<section id='reddit'>
			<div className='navigation'>
				{sortButtons.map(data => (
					<button
						key={data.text}
						className='flair-button'
						style={{ backgroundColor: data.backgroundColor }}
						onClick={handleClick}
						data-descr={data.dataDescr}
					>
						{data.text}
					</button>
				))}
			</div>

			{flair ? (
				// attempt to display posts with the selected flair
				relevantPosts.length !== 0 ? (
					<div className='viewport'>
						{relevantPosts
							.filter(post => post.link_flair_text === flair)
							.map(props => (
								<RedditPost key={props.id} {...props} />
							))}
					</div>
				) : (
					// if no posts were found, say so
					<NoReddit message={`No posts found with flair '${flair}'`} />
				)
			) : (
				<NoReddit message="Pick a flair to view today's hot posts" />
			)}
		</section>
	);
}

export default RedditComponent;
