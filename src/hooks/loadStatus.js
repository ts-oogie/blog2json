import {useEffect, useState} from 'react'

const LoadingStatus = (progress) => {
    const [status, setStatus] = useState('+')

    useEffect(() =>{

    }, [progress])

    return status
}

export default LoadingStatus