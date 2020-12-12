import React from 'react'
import BodySection from "../Body/BodySection"
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from "./Data"

function Home() {
    return (
        <>
            <BodySection {...homeObjOne}/>
            <BodySection {...homeObjTwo}/>
            <BodySection {...homeObjThree}/>
            <BodySection {...homeObjFour}/>
        </>
    );
}

export default Home;
