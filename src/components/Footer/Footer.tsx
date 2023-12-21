import './Footer.scss';
import logo from '../../assets/logos/logo.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <img
                className="footer__logo"
                src={logo}
                alt="clara tam's portfolio site logo"
            />
            <div className="footer__text">
                <p className="footer__copy">&copy; All rights reserved</p>
                <p className="footer__copy">Designed and built by Clara Tam</p>
            </div>
        </footer>
    )
};
