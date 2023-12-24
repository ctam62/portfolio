import './App.scss';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { ProjectPage } from './pages/ProjectPage/ProjectPage';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';


function App() {
    const [open, setOpen] = useState(false);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header open={open} setOpen={setOpen} />
            <Routes>
                <Route path="/" element={<HomePage open={open} setOpen={setOpen} />} />
                <Route
                    path="/project/:title"
                    element={
                        <ProjectPage open={open} setOpen={setOpen} />
                    }
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
