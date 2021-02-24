import React from "react";
import { Title } from "../common/components/Title/Title";
import s from "./Contacts.module.scss"

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <Title title={"Contacts"}/>
                <form className={s.form}>
                        <input className={s.item}/>
                        <input className={s.item}/>
                        <textarea className={s.item}/>
                </form>
                <button className={s.button}>Send</button>
            </div>
        </div>
    )
}