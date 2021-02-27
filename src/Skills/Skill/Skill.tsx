import React from "react";
import s from "./Skill.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type SkillPropsType = {
    title: string
    description: string
    icon: IconProp
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <FontAwesomeIcon className={s.font} icon={props.icon}/>
            </div>
            <div className={s.description}>
                <h3>{props.title}</h3>
                <span className={s.descriptionBlock}>{props.description}</span>
            </div>
        </div>
    )
}