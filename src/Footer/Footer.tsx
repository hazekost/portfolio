import React from "react";
import s from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <h2 className={s.name}>Kanstantsin Tsiuleneu</h2>
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