import React from "react";
import s from "./Title.module.scss"

type TitlePropsType = {
    title: string
}

export const Title: React.FC<TitlePropsType> = (props) => {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>
    )
}