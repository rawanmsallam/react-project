import React from 'react'
import BodySection from "../Body/BodySection"
import {homeObjOne} from "./Data"

function Home() {
    return (
        <>
            <BodySection {...homeObjOne}/>
        </>
    );
}

export default Home;
