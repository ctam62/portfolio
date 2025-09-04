import "./Header.scss";
import logo from "../../assets/logos/logo.svg";
import { Link } from "react-router-dom";
import resume from "/2025-08-21_ctam_resume.pdf";

interface props {
    open: boolean;
    setOpen: Function;
}

export const Header = ({ open, setOpen }: props) => {
    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/">
                    <img
                        className="header__logo"
                        src={logo}
                        alt="clara tam's portfolio site logo"
                    />
                </Link>
                <nav className={`toggle ${open ? "open" : ""}`} onClick={toggleOpen}>
                    <span className="cls"></span>
                    <span className="menu__container">
                        <ul className="header__nav-list menu">
                            <li className="header__nav-list-item">
                                <Link to="./">HOME</Link>
                            </li>
                            <li className="header__nav-list-item">
                                <Link to="./#about">ABOUT</Link>
                            </li>
                            <li className="header__nav-list-item">
                                <Link to="./#projects">PROJECTS</Link>
                            </li>
                            <li className="header__nav-list-item">
                                <Link to="./#contact">CONTACT</Link>
                            </li>
                            <li className="header__nav-list-item">
                                <Link to={resume} target="_blank">
                                    RESUME
                                </Link>
                            </li>
                        </ul>
                    </span>
                    <span className="cls"></span>
                </nav>
            </nav>
        </header>
    );
};
