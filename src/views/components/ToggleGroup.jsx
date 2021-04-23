import anime from 'animejs';
import React, { useEffect, useRef, useState } from 'react';

import '../scss/ToggleGroup.scss';

/**
 *
 * @param {{
 * 	id: string
 * 	values: string[],
 * 	description: string
 * }} props
 * @returns
 */
function ToggleGroup(props) {
	const { id, values, description } = props;
	const [activeToggle, setActiveToggle] = useState(values[0]);
	const animationRef = useRef(null);

	const toggleWidth = `calc(${Math.max(...values.map(_v => _v.length))}em + 6px)`;

	useEffect(() => {
		animationRef.current = anime({
			targets: `#${id}-ui`,
			left: `${(100 / values.length) * values.indexOf(activeToggle)}%`,
			duration: 350
		});
	});

	/**
	 * @param {React.SyntheticEvent<HTMLLabelElement>} event
	 */
	const handleSelect = event => {
		event.preventDefault();
		setActiveToggle(event.currentTarget.innerText.trim());
	};

	return (
		<div className='toggle-group'>
			<div id={id} style={{ display: 'none' }}>
				{values.map(value => (
					<input
						key={`${id}-${value}-label`}
						type='radio'
						name={id}
						value={value}
						defaultChecked={value === activeToggle}
						id={`${id}-${value}-label`}
					/>
				))}
			</div>

			<div className='description'>{description}</div>
			<div id={`${id}-labels`}>
				<div id={`${id}-ui`} style={{ width: `${100 / values.length}%` }}></div>
				<div className='modes'>
					{values.map(value => (
						<label
							className={value === activeToggle ? 'active' : ''}
							key={`${id}-${value}-label`}
							htmlFor={`${id}-${value}-label`}
							onClick={handleSelect}
							style={{ width: toggleWidth }}
						>
							{value}
						</label>
					))}
				</div>
			</div>
		</div>
	);
}

export default ToggleGroup;
