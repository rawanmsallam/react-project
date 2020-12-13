import React from 'react'
import BodySection from "../Body/BodySection"
import Pricing from '../Pricing/Pricing'
import {homeObjOne} from "./Data"

function Home() {
    return (
        <>
             <Pricing/>
            <BodySection {...homeObjOne}/>
          
           
           
        </>
    );
}

export default Home;