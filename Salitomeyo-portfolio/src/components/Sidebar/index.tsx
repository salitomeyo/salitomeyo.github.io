import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { faHome, faUser, faEnvelope, faPager } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../assets/images/temporary-logo.png';
import './index.scss';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <Link className='logo' to="/">
                <img src={Logo} alt="logo" />
            </Link>
            <nav className='sidebar-nav'>
                <div className='sidebar-links'>
                    <NavLink to="/">
                        <FontAwesomeIcon icon={faHome} />
                    </NavLink>
                    <NavLink to="/about">
                        <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                    <NavLink to="/projects">
                        <FontAwesomeIcon icon={faPager} />
                    </NavLink>
                </div>
                <div className='sidebar-footer'>
                    <NavLink to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </NavLink>
                </div>
            </nav>
        </ div>
    )
}

export default Sidebar;
