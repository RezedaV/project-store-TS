import React from 'react';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import Sun from "shared/assets/icons/Sun";
import Moon from "shared/assets/icons/Moon";
import Button, {ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}
const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {
    const {theme, changeTheme} = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={changeTheme}
        >
            {theme === Theme.DARK ? <Moon/> : <Sun/> }
        </Button>
    );
};

export default ThemeSwitcher;
