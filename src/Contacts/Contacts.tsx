import React from "react";
import s from "./Contacts.module.css"

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form}>
                        <input className={s.item}/>
                        <input className={s.item}/>
                        <textarea className={s.item}/>
                </form>
                <div className={s.button}>Send</div>
            </div>
        </div>
    )
}