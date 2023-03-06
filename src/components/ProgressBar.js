import React from 'react'
import {useEffect, useState} from 'react'
import useStorage from '../hooks/useStorage' 

const ProgressBar = ({file}) => {

    const {url, progress} = useStorage(file) 

    const [status, setStatus] = useState('')   

    useEffect(() => {    
        if(progress==1){
            setStatus("+")
        }
        else if(progress == 2){
            setStatus("++") 
        }
        else if(progress == 3){
            setStatus("+++") 
        }
        else if(progress == 4){
            setStatus("++++") 
        }
        else if(progress == 5){
            setStatus("+++++") 
        }
        else if(progress == 6){
            setStatus("++++++") 
        } 
        else if(url){
            setStatus("Add")
        }
    }, [progress, url])

    return (
        //if progress < 100, then cycle button
        <div className="progressBar"><h2>{status}</h2></div>
    )
    
}

export default ProgressBar