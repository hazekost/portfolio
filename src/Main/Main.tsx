import React from "react";
import s from "./Main.module.scss"
import Particles from "react-particles-js";
import ReactTypingEffect from 'react-typing-effect';
import photo from "../assets/image/20210102_214127.jpg"
import Tilt from 'react-parallax-tilt';

export const Main = () => {

    const particlesOpt = {
        "particles": {
            "number": {
                "value": 130,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            }
        }
    }

    return (
        <div id={"main"} className={s.mainBlock}>
            <Particles className={s.particles} params={particlesOpt}/>
            <div className={s.container}>
                <div className={s.aboutMe}>
                    <span className={s.greeting}>Hi there</span>
                    <h1>I am <span>Kanstantsin Tsiuleneu</span></h1>
                    <p><ReactTypingEffect className={s.typing} text={"Frontend Developer."}/></p>
                </div>
                <Tilt scale={1.05} transitionSpeed={2500}>
                    <div className={s.photo}>
                        <img className={s.image} src={photo} alt={"non"}/>
                    </div>
                </Tilt>
            </div>
        </div>
    )
}