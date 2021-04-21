import React from 'react';

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
	return (
		<>
			<div id={props.id} style={{ display: 'none' }}>
				{props.values.map(value => (
					<input
						key={`${props.id}-${value}-label`}
						type='radio'
						name={props.id}
						id={`${props.id}-${value}-label`}
					/>
				))}
			</div>

			<div id={`${props.id}-labels`}>
				<div id={`${props.id}-ui`}></div>
				<div className='modes'>
					{props.values.map(value => (
						<label key={`${props.id}-${value}-label`} htmlFor={`${props.id}-${value}-label`}>
							{value}
						</label>
					))}
				</div>
			</div>
		</>
	);
}

export default ToggleGroup;
