import React from "react";
import s from "./Skill.module.scss"

type SkillPropsType = {
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>icon</div>
            <div className={s.description}>
                <h3>{props.title}</h3>
                <span className={s.descriptionBlock}>{props.description}</span>
            </div>
        </div>
    )
}