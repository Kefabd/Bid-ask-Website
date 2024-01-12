import React from "react";
import Header from "../components/header/header";
import Cadre from "../components/cadre";
import CadreInfos from "../components/cadreInfos";


export default function Home() {
    
    return(
        <>
        <Header />
        <Cadre></Cadre>
        <CadreInfos></CadreInfos>
        </>
    )
}