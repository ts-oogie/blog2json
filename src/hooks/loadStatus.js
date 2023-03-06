import {useEffect, useState} from 'react'

const LoadingStatus = () => {

    let count = 1
    let plus = '+'

    const [status, setStatus] = useState(plus)

    useEffect(() =>{

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
        }, 100) 

    })

    return status
}

export default LoadingStatus