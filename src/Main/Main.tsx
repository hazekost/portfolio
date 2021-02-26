import React from "react";
import s from "./Main.module.scss"

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.aboutMe}>
                    <span className={s.greeting}>Hi there</span>
                    <h1>I am <span>Kanstantsin Tsiuleneu</span></h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    )
}