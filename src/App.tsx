import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/#about" element={<About />} />
                <Route path="/#project" element={<Projects />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
