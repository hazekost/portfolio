import React from "react";
import s from "./Main.module.css"

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.aboutMe}>
                    <span>Hi there</span>
                    <h1>I am Kanstantsin Tsiuleneu</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={s.photo}>photo</div>
            </div>
        </div>
    )
}