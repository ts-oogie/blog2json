import React from 'react'
import {useEffect, useState} from 'react'
import useStorage from '../hooks/useStorage' 
 
const ProgressBar = ({file, count, setCount, size, items, setItems}) => {

    const {url, progress, error} = useStorage(file) 

    // for loading symbol
    const [status, setStatus] = useState('') 
    // for loading symbol
    const setPlus = (progress) => {
         let inputArr = []
         for(let i=1; i<=progress; i++){
            inputArr.push("+")
            let joinStr = inputArr.join('')
            setStatus(joinStr) 
         }
    }

    const saveURL = () => { 

        let thisObj = {} // id, size, type, url 
        let newItem = items
        let newCount = count + 1
        setCount(newCount)  
        thisObj.id = newCount
        thisObj.size = size
        thisObj.type = 'img'
        thisObj.text = url
        newItem.push(thisObj)
        setItems(newItem) 

        alert("saved")
        console.log(newItem)

    }

    useEffect(() => {    
        if(progress){ 
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
        <div className="progressBar" onClick={()=>{saveURL()}}><h2>{status}</h2></div>
    )
    
}

export default ProgressBar