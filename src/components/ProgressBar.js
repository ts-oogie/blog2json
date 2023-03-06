import React from 'react'
import {useEffect} from 'react'
import useStorage from '../hooks/useStorage'
import LoadingStatus from '../hooks/loadStatus'

const ProgressBar = ({file, setFile}) => {

    const {url, progress} = useStorage(file) 

    let loadStatus = LoadingStatus(progress)

    const btnStyle = {
        height: "50px",
        width: "100px" 
    }

    const btnLoading = () => {
        if(progress < 100){
            alert("Loading")
        }
    }

    useEffect(() => {
        if(url){
            setFile(null)// setting file to null will result in the progress button to be removed
        } 
    }, [url, setFile])

    return (
        //if progress < 100, then cycle button
        <div className="progressBar">{loadStatus}</div>
    )
    
}

export default ProgressBar