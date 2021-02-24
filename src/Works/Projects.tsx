import React from "react";
import s from "./Projects.module.scss"
import {Project} from "./Project/Project";
import { Title } from "../common/components/Title/Title";
import todoImage from "../assets/image/todoList.png"
import socialImage from "../assets/image/socialNetwork.jpg"

export const Projects = () => {

    const socialNetwork = {
        backgroundImage: `url(${socialImage})`
    };
    const todoList = {
        backgroundImage: `url(${todoImage})`
    };

    return (
        <div className={s.projectsBlock}>
            <div className={s.container}>
                <Title title={"Projects"}/>
                <div className={s.projects}>
                    <Project style={todoList} title={"TodoLists"} description={"some description some description some description"}/>
                    <Project style={socialNetwork} title={"Social Network"} description={"some description some description some description some description some description some description some description"}/>
                </div>
            </div>
        </div>
    )
}