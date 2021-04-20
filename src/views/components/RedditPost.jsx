import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import '../scss/RedditPost.scss';

/**
 * @param {{
 * 	id: string,
 * 	title: string,
 * 	author: string,
 * 	permalink: string,
 * 	score: number
 * }} props
 */
function RedditPost(props) {
	const { id, title, author, permalink, score } = props;
	return (
		<button
			className='reddit-post'
			key={id}
			onClick={() => {
				window.open(`https://www.reddit.com${permalink}`, '_blank');
			}}
		>
			<img
				src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Reddit_glyph_svg-512.png'
				alt='reddit logo'
			/>
			<h5 className='post-title'>{title}</h5>
			<span className='post-author'>{author}</span>
			<span className='post-score'>
				<FontAwesomeIcon icon={faLevelUpAlt} />
				{score}
			</span>
		</button>
	);
}

export default RedditPost;
