import React, { useState } from 'react';

import '../scss/ToggleGroup.scss';

/**
 *
 * @param {{
 * 	id: string
 * 	values: string[]
 * }} props
 * @returns
 */
function ToggleGroup(props) {
	const { id, values } = props;
	const [activeToggle, setActiveToggle] = useState(values[0]);
	const toggleWidth = `calc(${Math.max(...values.map(_v => _v.length))}em + 6px)`;

	/**
	 * @param {React.SyntheticEvent<HTMLLabelElement>} event
	 */
	const handleSelect = event => {
		event.preventDefault();
		setActiveToggle(event.currentTarget.innerText.trim());
	};

	return (
		<>
			<div id={id} style={{ display: 'none' }}>
				{values.map(value => (
					<input
						key={`${id}-${value}-label`}
						type='radio'
						name={id}
						value={value}
						checked={value === activeToggle}
						id={`${id}-${value}-label`}
					/>
				))}
			</div>

			<div id={`${id}-labels`}>
				<div
					id={`${id}-ui`}
					style={{
						width: `${100 / values.length}%`,
						left: `${(100 / values.length) * values.indexOf(activeToggle)}%`
					}}
				></div>
				<div className='modes'>
					{values.map(value => (
						<label
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
		</>
	);
}

export default ToggleGroup;
