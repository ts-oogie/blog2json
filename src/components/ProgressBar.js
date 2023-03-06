import React from 'react'
import {useEffect, useState} from 'react'
import useStorage from '../hooks/useStorage' 

const ProgressBar = ({file, setFile}) => {

    const {url, progress} = useStorage(file) 

    const [status, setStatus] = useState('+') 

    const loadStatus = ( ) => {
        let count = 1
        let plus = '+' 
         
        setInterval(() => {
            count++
            if(count < 6){
                plus = plus + '+'
                setStatus(plus) 
            }
            else{
                count = 1
                plus = '+'
                setStatus(plus)
            }
        }, 200)  
        
    }

    const btnLoading = () => {
        if(progress < 100){
            alert("Loading")
        }
    }

    useEffect(() => {
        loadStatus()
        if(url){
            setFile(null)// setting file to null will result in the progress button to be removed
        } 
    }, [url, progress, setFile])

    return (
        //if progress < 100, then cycle button
        <div className="progressBar">{status}</div>
    )
    
}

export default ProgressBar