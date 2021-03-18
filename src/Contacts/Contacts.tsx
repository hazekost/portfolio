import React from "react";
import {Title} from "../common/components/Title/Title";
import s from "./Contacts.module.scss"
import {Fade} from "react-awesome-reveal";

export const Contacts = () => {
    return (
        <div id={"contacts"} className={s.contactsBlock}>
            <Fade className={s.fade} duration={2000}>
                <div className={s.container}>
                    <Title title={"Contact"}/>
                    <form className={s.form}>
                        <div className={s.name}>
                            <input placeholder={"Name"} className={s.inputName}/>
                        </div>
                        <div className={s.email}>
                            <input placeholder={"E-mail"} className={s.inputEmail}/>
                        </div>
                        <div className={s.message}>
                            <textarea placeholder={"Yor message"} className={s.textMessage}/>
                        </div>
                        <div>
                            <button className={s.button} type={"submit"}>Send Message</button>
                        </div>
                    </form>
                </div>
            </Fade>
        </div>
    )
}