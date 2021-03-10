import React from 'react';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import { Projects } from './Works/Projects';
import {Skills} from "./Skills/Skills";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
