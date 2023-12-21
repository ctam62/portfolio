import './HomePage.scss';
import { Hero } from '../../components/Hero/Hero';
import { About } from '../../components/About/About';
import { Skills } from '../../components/Skills/Skills';
import { Projects } from '../../components/Projects/Projects';
import { Contact } from '../../components/Contact/Contact';


export const HomePage = () => {
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