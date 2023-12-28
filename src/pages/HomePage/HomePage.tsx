import './HomePage.scss';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Hero } from '../../components/Hero/Hero';
import { About } from '../../components/About/About';
import { Skills } from '../../components/Skills/Skills';
import { Projects } from '../../components/Projects/Projects';
import { Contact } from '../../components/Contact/Contact';
import upArrow from '../../assets/icons/arrow-up-circle.svg';



interface props {
    open: boolean;
    setOpen: Function;
};


interface vars {
    pathname: string;
    hash: string;
    key: string;
};

export const HomePage = ({ open, setOpen }: props) => {

    const [visible, setVisible] = useState(false);

    const { pathname, hash, key }: vars = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const toggleVisible = () => {
            if (document.body.scrollTop > 350 ||
                document.documentElement.scrollTop > 350) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }

        window.onscroll = function () { toggleVisible() };

        if (hash === '') {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        } else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 0);
        }
    }, [pathname, hash, key]);

    const handleNavClose = () => {
        if (open === true) {
            setOpen(false);
        }
    };

    return (
        <main className="home" onClick={handleNavClose}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <img
                className={`home__back-to-top ${visible ? "" : "home__back-to-top--hide"}`}
                src={upArrow}
                alt="back to top arrow"
                onClick={() => navigate('./')}
            />
        </main>
    )
};