import React from 'react'
import {useEffect, useState} from 'react'
import useStorage from '../hooks/useStorage' 

const ProgressBar = ({file, setUrl}) => {

    const {url, progress, error} = useStorage(file) 

    const [status, setStatus] = useState('')
    
    const setPlus = (progress) => {
         let inputArr = []
         for(let i=1; i<=progress; i++){
            inputArr.push("+")
            let joinStr = inputArr.join('')
            setStatus(joinStr) 
         }
    }

    const saveURL = () => {
        console.log("url : " + url)
        setUrl(url)
    }

    useEffect(() => {    
        if(progress){
            //setStatus("+")
            setPlus(progress%6)//modulus
        }
        if(url){
            setStatus("Add") 
        }
        if(error){
            setStatus("Error") 
        }
    }, [progress, url, error])

    return (
        //if progress < 100, then cycle button
        <div className="progressBar" onClick={saveURL}><h2>{status}</h2></div>
    )
    
}

export default ProgressBar