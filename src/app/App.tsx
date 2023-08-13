import React, { Suspense } from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";



const App = () => {
    const {theme, changeTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme, 'pdg'])}>
            <NavBar />
            <button onClick={changeTheme}>Сменить тему</button>
            <AppRouter />
        </div>
    );
};

export default App;


