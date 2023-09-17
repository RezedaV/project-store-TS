import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import Button, {ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {theme, changeTheme} = useTheme()
    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggle}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
};

export default LangSwitcher;


// const Comp = () => {
//     const { t, i18n } = useTranslation();
//
//     const toggle = () => {
//         i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
//     }
//     return (
//         <div>
//             <button onClick={toggle}>{t('Перевод')}</button>
//         </div>
//     )
// }
