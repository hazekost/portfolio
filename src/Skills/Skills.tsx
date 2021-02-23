import React from "react";
import s from "./Skills.module.css"
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill title={"js"} description={"some description some description some description"}/>
                    <Skill title={"css"} description={"some description some description some description"}/>
                    <Skill title={"react"} description={"some description some description some description"}/>
                </div>
            </div>
        </div>
    )
}