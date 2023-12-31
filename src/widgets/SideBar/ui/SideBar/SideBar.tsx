import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss"
import ThemeSwitcher from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher/LangSwitcher";
interface SideBarProps {
    className?:string
}

const SideBar = ({className}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.sideBar, {[cls.collapsed]:collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};

export default SideBar;
