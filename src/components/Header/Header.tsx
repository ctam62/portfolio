import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.svg';


export const Header = () => {
    return (
        <header className="header"> 
            <nav className="header__nav">
                <Link to="/">
                    <img className="header__logo"
                        src={logo}
                        alt="clara tam's portfolio site logo"
                    />
                </Link>
                <nav className="open">
                    <span className="cls"></span>
                    <span>
                        <ul className="header__nav-list submenu">
                            <li className="header__nav-list-item">
                                <Link to="/">HOME</Link>
                            </li>
                            <li className="header__nav-list-item">
                                <Link to="/#about">ABOUT</Link>
                            </li>
                            <li className="header__nav-list-item">
                                <Link to="/#projects">PROJECTS</Link>
                            </li>
                            <li className="header__nav-list-item">
                                <Link to="/resume">RESUME</Link>
                            </li>
                        </ul>
                    </span>
                    <span className="cls"></span>
                </nav>
            </nav>    
        </header>
    )
};
