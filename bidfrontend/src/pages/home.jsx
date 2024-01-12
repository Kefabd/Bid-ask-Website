import React from "react";
import Header from "../components/header/header";
import Shop from './Shop';
import CadreInfos from "../components/cadreInfos";
import AjoutArticle from "./AjoutArticle";


export default function Home() {
    
    return(
        <>
        <Header />
        <CadreInfos></CadreInfos>
        <AjoutArticle></AjoutArticle>
        <Shop></Shop>
        </>
    )
}