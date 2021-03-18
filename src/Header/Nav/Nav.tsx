import React from "react";
import s from "./Nav.module.scss"
import {Link} from "react-scroll/modules";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <Link activeClass={s.active} to={"main"} smooth={true}>Main</Link>
            <Link to={"skills"} smooth={true}>Skills</Link>
            <Link to={"projects"} smooth={true}>Projects</Link>
            <Link to={"contacts"} smooth={true}>Contacts</Link>
        </div>
    )
}