import './Contact.scss';
import { Link } from 'react-router-dom';


export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="contact__heading">Let's Connect</h2>
            <Link to={"https://www.linkedin.com/in/claramoytam"} target="_blank">
                <button className="contact__button">SEND MESSAGE</button>
            </Link>
        </section>
    )
};
