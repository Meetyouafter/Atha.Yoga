import React from "react";
import icon from "./../../../assets/images/SplashScreens/firstPage.png"
import "./FirstPage.module.scss"

const FirstPage = () => {
    return (
        <div className='container'>
            <img className='img' src={icon} alt='sportsman' />
        </div>
    )
};

export default FirstPage;