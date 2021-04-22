import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

/**
 * @param {{
 * 	icon?: import('@fortawesome/fontawesome-svg-core').IconDefinition
 * 	onClick?: React.MouseEventHandler<HTMLDivElement>
 * }} props
 * @returns
 */
function OvenDial(props) {
	const { icon, onClick } = props;
	return (
		<div className='dial' onClick={onClick}>
			{icon && <FontAwesomeIcon icon={icon} />}
		</div>
	);
}

export default OvenDial;
