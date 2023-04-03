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
            <h3 style={cssTBH}>{hType}</h3>
        </div>
    ) 
}

HeaderButton.defaultProps = {
    unSelected : {
        width: "60px",
        height: "30px", 
        margin: "0 auto",
        border: "solid white 1px",
        color: "white", 
        backgroundColor: "black",
        cursor: 'none',
        borderRadius : '20px',
        paddingTop : "5px" 
    },
    selected : {
        width: "60px",
        height: "30px", 
        margin: "0 auto",
        border: "solid black 1px",
        color: "black", 
        backgroundColor: "white",
        cursor: 'pointer',
        borderRadius : '20px',
        paddingTop : "5px" 
    }
}

const MediaButton = ({mType, size, setSize}) => {

    let cssDivWrapper = MediaButton.defaultProps.unSelected 
  
    if(size == "" || size != mType){
        //then the cssDivWrapper should be HeaderButton.defaultProps
        cssDivWrapper = MediaButton.defaultProps.unSelected 
    }
    else if(size == mType){ 
        cssDivWrapper =  MediaButton.defaultProps.selected  
    } 

    const cssTBH = {
        marginTop: "2px"
    } 

    return(
        <div style={cssDivWrapper} 
            onClick={() => {setSize(mType)}} 
            onMouseEnter={() => {setSize(mType)}}
        >
            <h3 style={cssTBH}>{mType}</h3>
        </div>
    ) 
}

MediaButton.defaultProps = {
    unSelected : {
        width: "60px",
        height: "30px", 
        margin: "0 auto",
        border: "solid white 1px",
        color: "white", 
        backgroundColor: "black",
        cursor: 'none',
        borderRadius: "20px",
        paddingTop : "5px" 
    },
    selected : {
        width: "60px",
        height: "30px", 
        margin: "0 auto",
        border: "solid black 1px",
        color: "black", 
        backgroundColor: "white",
        cursor: 'pointer',
        borderRadius: "20px",
        paddingTop : "5px"
    }
}

export { HeaderButton, MediaButton } 