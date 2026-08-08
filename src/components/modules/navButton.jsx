import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from "./text";

const NavButton = ({ title, url = "/", icon, active = false}) => {
	const classes = active ? "nav-item nav-active" : "nav-item"

	if (title !== 'CV') return (
		<Link className={classes} to={url}>
			{typeof icon !== 'undefined' ? <FontAwesomeIcon className='nav-icon' icon={icon} beat={false}/> : ''}
			<Text type="heading" classOverride='nav-heading'>{title}</Text>
		</Link>
	);

	else return (
		<a className={classes} href={url} target="_blank" rel="noopener noreferrer">
			{typeof icon !== 'undefined' ? <FontAwesomeIcon className='nav-icon' icon={icon} beat={false}/> : ''}
			<Text type="heading" classOverride='nav-heading'>{title}</Text>
		</a>
	);
}

export default NavButton;