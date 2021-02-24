import React from "react";
import s from "./Project.module.scss"

type StyleType = {
    backgroundImage: string
}

type WorkPropsType = {
    title: string
    description: string
    style: StyleType
}

export const Project: React.FC<WorkPropsType> = (props) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.image} style={props.style}>
                <a href={""} className={s.button}>view</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    )
}