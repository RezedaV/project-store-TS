import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <h1>
            {t("Инфо на главной")}
        </h1>
    );
};

export default MainPage;
