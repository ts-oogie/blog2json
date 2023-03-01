import React from 'react'

import {useState} from 'react'
import HeaderButton from './headerButton'

const HType = ({headerType, setHeaderType}) => { 

    const cssTB = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        fontFamily: "Dosis",
        marginTop: "-30px"
    }

    const cssTBDiv = {
        width : "25%",
        height: "40px", 
        marginBottom: "20px" 
    } 

    return ( 
        <header className="typeBar" style={cssTB}>
            <div className="tbButtonContainer">
                <HeaderButton hType={"H1"} headerType={headerType} setHeaderType={setHeaderType}/>
            </div>
            <div className="tbButtonContainer">
                <HeaderButton hType={"H2"} headerType={headerType} setHeaderType={setHeaderType}/>
            </div>
            <div className="tbButtonContainer">
                <HeaderButton hType={"H3"} headerType={headerType} setHeaderType={setHeaderType}/>
            </div>
            <div className="tbButtonContainer">
                <HeaderButton hType={"H4"} headerType={headerType}  setHeaderType={setHeaderType}/>
            </div>
        </header> 
    )
}

export default HType