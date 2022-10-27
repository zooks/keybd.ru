import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom'
import {MainPage} from "./pages/MainPage";
import {EmojiPage} from "./pages/EmojiPage";
import './App.sass';
import {Navigation} from "./components/Navigation";
import {Footer} from "./components/Footer";

function App() {

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={ <MainPage /> }></Route>
                <Route path="/emoji" element={ <EmojiPage /> }></Route>
            </Routes>
            <Footer />
        </>
    );

}

export default App;
