import React from "react";
import s from "./Footer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {Fade} from "react-awesome-reveal";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <Fade className={s.fade} duration={2000}>
                <div className={s.container}>
                    <h2 className={s.name}>Kanstantsin</h2>
                    <div className={s.some}>
                        <a className={s.item} href={"https://github.com"}>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <div className={s.item}>
                            <FontAwesomeIcon icon={faTelegram}/>
                        </div>
                        <div className={s.item}>
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </div>
                    </div>
                    <div className={s.rights}>All rights reserved</div>
                </div>
            </Fade>
        </div>
    )
}