import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/shared/header/Header.component';
import Footer from './components/shared/footer/Footer.component';
import Loader from './components/shared/loader/Loader.component';

import FavoriteSoccerTeamsContextProvider from './context/FavoriteSoccerTeams.context';

const HomePage = lazy(() => import('./pages/home-page/HomePage.component'));
const PageNotFound = lazy(() => import('./pages/page-not-found/PageNotFound.component'));

const App = () => {
    return (
        <BrowserRouter>
            <Header />

            <Suspense fallback={<Loader />}>
                <FavoriteSoccerTeamsContextProvider>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </FavoriteSoccerTeamsContextProvider>
            </Suspense>

            <Footer />
        </BrowserRouter>
    );
};

export default App;
