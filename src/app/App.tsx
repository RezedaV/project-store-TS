import React, {Suspense} from 'react';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets/SideBar";
import {useTranslation} from "react-i18next";


const App = () => {
    const {theme, changeTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme, 'pdg'])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>

            </Suspense>
        </div>
    );
};

export default App;


