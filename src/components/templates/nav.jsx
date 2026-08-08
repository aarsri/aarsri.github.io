import { useLocation } from 'react-router-dom';
import NavButton from '../modules/navButton';

const Navbar = () => {
	const location = useLocation();
	const currentPage = location.pathname;

	return (
		<nav className='navbar'>
				<NavButton title="About Me" url="/" icon="fa-solid fa-contact-card" active={currentPage == '/'}></NavButton>
				<NavButton title="Experience" url="/experience" icon="fa-solid fa-suitcase" active={currentPage == '/experience'}></NavButton>
				<NavButton title="CV" url="./src/assets/pdfs/CV_for_website.pdf" icon="fa-brands fa-envira" active={false}></NavButton>
		</nav>
	);
}

export default Navbar;