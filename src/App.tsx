import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Hero />
                <About />
                <Skills />
                <Projects />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
