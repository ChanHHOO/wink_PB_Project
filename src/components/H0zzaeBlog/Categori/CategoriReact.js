import React from 'react';
import Title from "../Title";
import Navbar from "../../commons/NavbarComponent/Navbar";
import Categori from "../CategoriUi";
import PostItem from "../Post/PostItem"

export default function CatergoriReact() {

    return(
        <div>
            <Title/>
            <Navbar/>
            <Categori/>
            <PostItem/>
        </div>
    )
}