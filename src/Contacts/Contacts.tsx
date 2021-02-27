import React from "react";
import {Title} from "../common/components/Title/Title";
import s from "./Contacts.module.scss"

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
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
                        <textarea  placeholder={"Yor message"} className={s.textMessage}/>
                    </div>

                </form>
                <button className={s.button}>Send Message</button>
            </div>
        </div>
    )
}