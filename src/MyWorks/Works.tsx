import React from "react";
import s from "./Works.module.css"
import {Work} from "./Work/Work";

export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={s.container}>
                <h2 className={s.title}>My Works</h2>
                <div className={s.works}>
                    <Work title={"TodoLists"} description={"some description some description some description"}/>
                    <Work title={"Social Network"} description={"some description some description some description"}/>
                </div>
            </div>
        </div>
    )
}