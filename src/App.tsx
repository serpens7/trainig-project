import './index.scss';
import { Route, Routes } from 'react-router-dom';
import AboutPage from 'pages/AboutPage/AboutPage';
import MainPage from 'pages/MainPage/MainPage';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';

const App = () => {
    return (
        <div className='app'>
            <Link to='/'>Главная</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                 <Route path='/about' element={<AboutPage />} />
                 <Route path='/main' element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;