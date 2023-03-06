import React from 'react'
import {useEffect, useState} from 'react'
import useStorage from '../hooks/useStorage' 

const ProgressBar = ({file}) => {

    const {url, progress} = useStorage(file) 

    const [status, setStatus] = useState('')
    
    const setPlus = (progress) => {
         let inputArr = []
         for(let i=1; i<=progress; i++){
            inputArr.push("+")
            let joinStr = inputArr.join('')
            setStatus(joinStr) 
         }
    }

    const alertMe = () => {
        console.log("clicked")
    }

    useEffect(() => {    
        if(progress==1){
            //setStatus("+")
            setPlus(progress)
        }
        else if(progress == 2){
            //setStatus("++") 
            setPlus(progress)
        }
        else if(progress == 3){
            //setStatus("+++") 
            setPlus(progress)
        }
        else if(progress == 4){
            //setStatus("++++") 
            setPlus(progress)
        }
        else if(progress == 5){
            //setStatus("+++++") 
            setPlus(progress)
        }
        else if(progress == 6){
            //setStatus("++++++") 
            setPlus(progress)
        } 
        else if(url){
            setStatus("Add") 
        }
    }, [progress, url])

    return (
        //if progress < 100, then cycle button
        <div className="progressBar" onClick={alertMe}><h2>{status}</h2></div>
    )
    
}

export default ProgressBar