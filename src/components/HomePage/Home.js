import React from 'react'
import BodySection from "../Body/BodySection"
import Pricing from '../Pricing/Pricing'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from "./Data"

function Home() {
    return (
        <>
            <BodySection {...homeObjOne}/>
            <BodySection {...homeObjTwo}/>
            <BodySection {...homeObjThree}/>
            <Pricing/>
            <BodySection {...homeObjFour}/>
           
        </>
    );
}

export default Home;
