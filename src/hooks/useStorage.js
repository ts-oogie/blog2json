import {useState, useEffect} from 'react'
import {projectStorage, ref, uploadBytesResumable} from '../firebase/config'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => { // runs when component loads, unloads, or is updated .. file is always updated when firebase returns progress
        //references
        const storRef = ref(projectStorage, file.name) //reference address where file is stored
        const uploadTask = uploadBytesResumable(storRef, file)

        uploadTask.on('state_changed', (snapshot) => {
            console.log("snapshot : " )
            console.log( snapshot.bytesTransferred)
            //setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        })  
            
        } ) 

    return {progress, url, error}

}

export default useStorage



