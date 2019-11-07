import React,{useState, useCallback} from 'react';
import mainImage from '../../../images/main_image.jpg';
import styled from "styled-components";
import {Motion, spring} from "react-motion";
import LoginComponent from "./LoginComponent";

const Bottons = styled.div`
    position:relative;
    width:100%;
    height:33.33%;
    background-color:rgb(0,0,0,0.4);
    color:white;
    border-bottom:1px solid rgb(255, 255, 255, 0.5);
    text-align:center;
`;

export default function MainComponent({history}){

    const [isFocusedLogin, setIsFocusedLogin] =  useState(false);
    const [isFocusedJoin, setIsFocusedJoin] =  useState(false);
    const [isFocusedExplore, setIsFocusedExplore] =  useState(false);

    const [checkOnClick, setCheckOnClick] = useState(false);



    const handleMouseOver = (checkFocus, title)=> {
        switch (title) {
            case 'LOGIN':
                checkFocus || checkOnClick ? setIsFocusedLogin(true) : setIsFocusedLogin(false);
                return;
            case 'JOIN':
                checkFocus || checkOnClick ? setIsFocusedJoin(true) : setIsFocusedJoin(false);
                return;
            case 'EXPLORE':
                checkFocus || checkOnClick ? setIsFocusedExplore(true) : setIsFocusedExplore(false);
                return;
            default:
                return;
        }
    }

    const handleClickNav = (title)=>{
        const buttonClass = document.getElementsByClassName(title)[0];
        const titleClass = document.getElementsByClassName(title + "title")[0]
        switch (title) {
            case "LOGIN":
                if (checkOnClick) {
                    buttonClass.style.height = "33.33%";
                    titleClass.style.top = "40%";
                    titleClass.style.left = "17%";
                    setCheckOnClick(false);
                } else {
                    buttonClass.style.height = "100%";
                    titleClass.style.top = "5%";
                    titleClass.style.left = "1%";
                    setCheckOnClick(true);
                }
                return;
            case "JOIN":
                if (checkOnClick) {
                    document.getElementsByClassName("LOGIN")[0].style.top = "0%";
                    buttonClass.style.top = '0%'
                    buttonClass.style.height = "33.33%";
                    titleClass.style.top = "40%";
                    titleClass.style.left = "17%";
                    setCheckOnClick(false);
                } else {
                    document.getElementsByClassName("LOGIN")[0].style.top = "-33.33%"
                    buttonClass.style.top = '-33.33%';
                    buttonClass.style.height = "100%";
                    titleClass.style.top = "5%";
                    titleClass.style.left = "1%";
                    setCheckOnClick(true);
                }
                return;
            case "EXPLORE":
                if (checkOnClick) {
                    document.getElementsByClassName("LOGIN")[0].style.top = "0%"
                    document.getElementsByClassName("JOIN")[0].style.top = "0%"
                    buttonClass.style.top = '0%';
                    buttonClass.style.height = "33.33%";
                    titleClass.style.top = "40%";
                    titleClass.style.left = "17%";
                    setCheckOnClick(false);
                } else {
                    document.getElementsByClassName("LOGIN")[0].style.top = "-66%"
                    document.getElementsByClassName("JOIN")[0].style.top = "-66%"
                    buttonClass.style.top = '-66.66%';
                    buttonClass.style.height = "100%";
                    titleClass.style.top = "5%";
                    titleClass.style.left = "1%";
                    setCheckOnClick(true);
                }
                return;
            default:
                return;
        }

    }

        const redirectionItem = ['LOGIN', 'JOIN', 'EXPLORE'];

    return (
        <div className="background" style={{position:"absolute", width:"100%", height:"100%",left:"0px", top:"0px", overflow:"hidden" }}>
            <div style={{position:"absolute",backgroundColor:"rgb(0,0,0,0.5)", zIndex:"2", width:"100%", height:"100%"}}></div>
            <div style={{position:"absolute",zIndex:"1", height:"100%", width:"100%", textAlign:"right"}}>
                <img src={mainImage} style={{position:"relative", height:"100%", minWidth:"100%"}}/>
            </div>
            <div style={{position:"absolute", width:"30%", height:"100%", zIndex:3, overflow:"hidden"}}>
                <Motion
                    defaultStyle={{x1:-190,x2:-190, x3:-190 ,opacity:0}}
                    style={{x1:spring(isFocusedLogin ? 0 : -190),x2:spring(isFocusedJoin ? 0 : -190),x3:spring(isFocusedExplore ? 0 : -190), opacity:spring(setIsFocusedLogin ? 1 : 0)}}
                >
                    {
                        style =>(
                            <>
                                {
                                    redirectionItem.map((title, index) => {
                                        const objName = 'x'+(Number(index)+1);
                                        return(
                                            <Bottons className={title}
                                                     onMouseOver={()=>handleMouseOver(true, title)}
                                                     onMouseOut={()=>handleMouseOver(false, title)}
                                                     onClick={()=>(handleClickNav(title))}
                                                     style={{transform:`translateX(${style[objName]}px)`,transition: "height 1s", opacity:style.opacity, height:"33.33%"}}>
                                                <h1 className={title + "title"} style={{position:"relative",transition:"all 1s",top:"40%", left:"17%"}}>{title}</h1>
                                            </Bottons>
                                        )
                                    })
                                }
                                {style.x1 === 0 && checkOnClick ?
                                    <>
                                        <LoginComponent />
                                    </>

                                    :
                                    <>
                                    </>
                                }
                            </>
                        )
                    }
                </Motion>


            </div>

        </div>
    )
}