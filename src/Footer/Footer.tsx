import React from "react";
import s from "./Footer.module.scss"
import {Title} from "../common/components/Title/Title";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <Title title={"Kanstantsin"}/>
                <div className={s.some}>
                    <div className={s.item}></div>
                    <div className={s.item}></div>
                    <div className={s.item}></div>
                    <div className={s.item}></div>
                </div>
                <div className={s.rights}>All rights reserved ?</div>
            </div>
        </div>
    )
}