import React from "react";
import s from "./Work.module.css"

type WorkPropsType = {
    title: string
    description: string
}

export const Work: React.FC<WorkPropsType> = (props) => {
    return (
        <div className={s.work}>
            <div className={s.image}>
                <div className={s.button}>view</div>
            </div>
            <div className={s.info}>
                <span className={s.title}>{props.title}</span>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    )
}