import React from "react";
import s from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <h2 className={s.name}>Kanstantsin</h2>
                <div className={s.some}>
                    <div className={s.item}>
                        <FontAwesomeIcon icon={faFacebook}/>
                    </div>
                    <div className={s.item}>
                        <FontAwesomeIcon icon={faTelegram}/>
                    </div>
                    <div className={s.item}>
                        <FontAwesomeIcon icon={faVk}/>
                    </div>
                </div>
                <div className={s.rights}>All rights reserved ?</div>
            </div>
        </div>
    )
}