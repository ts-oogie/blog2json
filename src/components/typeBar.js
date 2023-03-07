import React from 'react'

import {useState} from 'react'
import { HeaderButton, MediaButton } from './headerButton'

const Htype = ({headerType, setHeaderType}) => { 

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

const Mtype = ({mediaType, setMediaType}) => { 

    const cssTB = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        fontFamily: "Dosis",
        marginTop: "-30px",
        width: "40%",
        margin: "0 auto"
    }

    const cssTBDiv = {
        width : "25%",
        height: "40px", 
        marginBottom: "20px" 
    } 

    return ( 
        <>
        <h2>Specify a width : </h2><br/>
        <header className="typeBar" style={cssTB}>
            
            <div className="tbButtonContainer">
                <MediaButton mType={"25"} mediaType={mediaType} setMediaType={setMediaType}/>
            </div>
            <div className="tbButtonContainer">
                <MediaButton mType={"50"} mediaType={mediaType} setMediaType={setMediaType}/>
            </div>
            <div className="tbButtonContainer">
                <MediaButton mType={"75"} mediaType={mediaType} setMediaType={setMediaType}/>
            </div>
            <div className="tbButtonContainer">
                <MediaButton mType={"100"} mediaType={mediaType}  setMediaType={setMediaType}/>
            </div>
        </header> 
        </>
    )
}

export { Htype, Mtype } 