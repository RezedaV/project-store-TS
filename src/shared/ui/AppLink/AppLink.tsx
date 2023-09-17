import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "widgets/NavBar/ui/NavBar.module.scss";
import {Link, LinkProps} from "react-router-dom";
import * as trace_events from "trace_events";

export enum AppLinkTheme {
    PRIMARY='primary',
    SECONDARY ='secondary'
}
interface AppLinkProps extends LinkProps  {
    className?: string;
    theme?: AppLinkTheme;
}
const AppLink:FC<AppLinkProps> = (props) => {
    const {
        className,
        to,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props
    return (
        <Link
            className={classNames(cls.AppLink, {[cls[theme]]: true}, [className])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;