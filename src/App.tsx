import React, { Suspense } from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, changeTheme} = useTheme()



    return (
        <div className={classNames('app', {}, [theme, 'pdg'])}>
            <button onClick={changeTheme}>Сменить тему</button>
            <Link to={'/'}>Главная</Link>
            <br/>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;


