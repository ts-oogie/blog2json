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
        marginTop: "0px"
    } 

    return(
        <div style={cssDivWrapper} onClick={() => {setHeaderType(hType)}} >
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
        borderRadius: "20px" 
    },
    selected : {
        width: "40px",
        height: "30px", 
        margin: "0 auto",
        border: "solid black 1px",
        color: "black", 
        backgroundColor: "white",
        borderRadius: "20px" 
    }
}

export default HeaderButton