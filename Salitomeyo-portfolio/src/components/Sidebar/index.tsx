import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { faHome, faUser, faEnvelope, faPager } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons';

import Logo from '../../assets/images/temporary-logo.png';
import './index.scss';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <Link className='logo' to="/">
                <img src={Logo} alt="logo" />
            </Link>
            <nav className='sidebar-nav'>
                <NavLink to="/" className="home-link">
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink to="/about" className="about-link">
                    <FontAwesomeIcon icon={faUser} />
                </NavLink>
                <NavLink to="/projects" className="projects-link">
                    <FontAwesomeIcon icon={faPager} />
                </NavLink>
                <NavLink to="/contact" className="contact-link">
                    <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>
            </nav>
            <ul className='sidebar-socials'>
                <li>
                    <a href="https://www.linkedin.com/in/salome-aristizabal/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/salitomeyo">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://salitomeyo-16.itch.io/">
                        <FontAwesomeIcon icon={faItchIo} />
                    </a>
                </li>
            </ul>
        </ div>
    )
}

export default Sidebar;
