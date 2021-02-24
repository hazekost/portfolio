import React from "react";
import s from "./Skills.module.scss"
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/Title/Title";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <Title title={"My Skills"}/>
                <div className={s.skills}>
                    <Skill title={"js"} description={"some description some description some description"}/>
                    <Skill title={"css"} description={"some description some description some description"}/>
                    <Skill title={"react"} description={"some description some description some description"}/>
                </div>
            </div>
        </div>
    )
}