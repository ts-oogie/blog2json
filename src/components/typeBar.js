import {useState} from 'react'
import HeaderButton from './headerButton'

const HType = () => {

    const [headerType, setHeaderType] = useState("")

    const cssTB = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        fontFamily: "Dosis",
        marginTop: "-30px"
    }

    const cssTBDiv = {
        width : "25%",
        height: "40px", 
        marginBottom: "20px" 
    } 

    return ( 
        <header className="typeBar" style={cssTB}>
            <div style={cssTBDiv}>
                <HeaderButton headerType={"h1"} setHeaderType={setHeaderType}/>
            </div>
            <div style={cssTBDiv}>
                <HeaderButton headerType={"h2"} setHeaderType={setHeaderType}/>
            </div>
            <div style={cssTBDiv}>
                <HeaderButton headerType={"h3"} setHeaderType={setHeaderType}/>
            </div>
            <div style={cssTBDiv}>
                <HeaderButton headerType={"h4"} setHeaderType={setHeaderType}/>
            </div>
        </header> 
    )
}

export default HType