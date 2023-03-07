import React from 'react'

import {useEffect} from 'react'
const HeaderButton = ({hType, headerType, setHeaderType}) => {

    let cssDivWrapper = HeaderButton.defaultProps.unSelected 
  
    if(headerType == "" || headerType != hType){
        //then the cssDivWrapper should be HeaderButton.defaultProps
        cssDivWrapper = HeaderButton.defaultProps.unSelected 
    }
    else if(headerType == hType){ 
        cssDivWrapper = HeaderButton.defaultProps.selected  
    } 

    const cssTBH = {
        marginTop: "2px"
    } 

    return(
        <div style={cssDivWrapper} 
            onClick={() => {setHeaderType(hType)}} 
            onMouseEnter={() => {setHeaderType(hType)}}
        >
            <h2 style={cssTBH}>{hType}</h2>
        </div>
    ) 
}

HeaderButton.defaultProps = {
    unSelected : {
        width: "40px",
        height: "30px", 
        margin: "0 auto",
        border: "solid white 1px",
        color: "white", 
        backgroundColor: "black",
        cursor: 'none' 
    },
    selected : {
        width: "40px",
        height: "30px", 
        margin: "0 auto",
        border: "solid black 1px",
        color: "black", 
        backgroundColor: "white",
        cursor: 'pointer'
    }
}

const MediaButton = ({mType, mediaType, setMediaType}) => {

    let cssDivWrapper = MediaButton.defaultProps.unSelected 
  
    if(mediaType == "" || mediaType != mType){
        //then the cssDivWrapper should be HeaderButton.defaultProps
        cssDivWrapper = MediaButton.defaultProps.unSelected 
    }
    else if(mediaType == mType){ 
        cssDivWrapper =  MediaButton.defaultProps.selected  
    } 

    const cssTBH = {
        marginTop: "2px"
    } 

    return(
        <div style={cssDivWrapper} 
            onClick={() => {setMediaType(mType)}} 
            onMouseEnter={() => {setMediaType(mType)}}
        >
            <h2 style={cssTBH}>{mType}</h2>
        </div>
    ) 
}

MediaButton.defaultProps = {
    unSelected : {
        width: "40px",
        height: "30px", 
        margin: "0 auto",
        border: "solid white 1px",
        color: "white", 
        backgroundColor: "black",
        cursor: 'none' 
    },
    selected : {
        width: "40px",
        height: "30px", 
        margin: "0 auto",
        border: "solid black 1px",
        color: "black", 
        backgroundColor: "white",
        cursor: 'pointer'
    }
}

export { HeaderButton, MediaButton } 