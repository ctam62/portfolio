import './Contact.scss';
import { Link } from 'react-router-dom';
import linkedIn from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';


export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact__content">
                <span className="contact__line--primary"></span>
                <span className="contact__circle--primary"></span>

                <h2 className="contact__heading">Get in Touch</h2>
                <div className="contact__message">
                    <p className="contact__text">I am always open to any new ideas and opportunities.</p>
                    <p className="contact__text">Feel free to reach out.</p>
                </div>
                <button
                    className="contact__button"
                    onClick={() => window.location.href = "mailto:claramtam@gmail.com"}
                >
                    SEND MESSAGE
                </button>
                <div className="contact__social">
                    <Link to="https://www.linkedin.com/in/claramoytam/" target="_blank">
                        <img className="contact__icons" src={linkedIn} alt="linkedin" />
                        <div className="contact__icons-shadow"></div>
                    </Link>
                    <Link to="https://github.com/ctam62" target="_blank">
                        <img className="contact__icons" src={github} alt="github" />
                        <div className="contact__icons-shadow"></div>
                    </Link>
                </div>
            </div>
        </section>
    )
};
