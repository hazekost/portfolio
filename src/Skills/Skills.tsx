import React from "react";
import s from "./Skills.module.scss";
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/Title/Title";
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <Title title={"My Skills"}/>
                <div className={s.skills}>
                    <Skill icon={faJs} title={"JS"} description={"some description some description some description some description some description some description"}/>
                    <Skill icon={faCss3} title={"css"} description={"some description some description some description"}/>
                    <Skill icon={faReact} title={"react"} description={"some description some description some description"}/>
                </div>
            </div>
        </div>
    )
}