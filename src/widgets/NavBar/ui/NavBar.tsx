import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss"

interface NavBarProps {
    className?:string
}

const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <Link className={classNames(cls.linkMain)} to={'/'}>Главная</Link>
                <Link to={'/about'}>About</Link>
            </div>

        </div>
    );
};

export default NavBar;
