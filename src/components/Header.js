import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wraper">

            <div className="main-info">
                <h1>Web Development and Websites Promotions</h1>
                <Typed 
                    className="typed-text"
                    strings={["HELLO!","I'M DENNIS DEVEZA", "WEB DEVELOPER AND TEST DEVT ENGINEER"]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
