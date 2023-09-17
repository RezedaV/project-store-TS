import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss"
import AppLink from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavBarProps {
    className?:string
}

const NavBar = ({className}: NavBarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink className={classNames(cls.linkMain)} to={'/'}>{t("Главная")}</AppLink>
                <AppLink to={'/about'}>{t("О сайте")}</AppLink>
            </div>

        </div>
    );
};

export default NavBar;
