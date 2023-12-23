import './HomePage.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../../components/Hero/Hero';
import { About } from '../../components/About/About';
import { Skills } from '../../components/Skills/Skills';
import { Projects } from '../../components/Projects/Projects';
import { Contact } from '../../components/Contact/Contact';


interface vars {
    pathname: string;
    hash: string;
    key: string;
}

export const HomePage = () => {

    const { pathname, hash, key }: vars = useLocation();

    useEffect(() => {
        if (hash === '') {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 0);
        }
    }, [pathname, hash, key]);

    return (
        <main>
            <Hero />
            <About />            
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
};