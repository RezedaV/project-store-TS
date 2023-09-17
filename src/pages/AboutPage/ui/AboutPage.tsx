import React from 'react';
import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <h1>
            {t("Инфо о сайте")}
        </h1>
    );
};

export default AboutPage;
