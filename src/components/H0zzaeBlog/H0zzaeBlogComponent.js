import React from 'react';
import Categori from "./Categori";
import Navbar from "../commons/NavbarComponent/Navbar";
import PostItem from "./Post/PostItem";
import Title from "./Title";

export default function H0zzaeBlogComponent(){
    return(
        <div>
                <Title/>
                <Navbar/>
                <Categori></Categori>
                <PostItem/>
        </div>
    )
}