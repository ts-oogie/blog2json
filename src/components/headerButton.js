

const HeaderButton = ({headerType, setHeaderType}) => {

    const cssDivWrapper = {
        width: "40px",
        height: "30px",
        backgroundColor: "grey",
        margin: "0 auto",
        border: "solid white 1px",
        color: "white", 
        backgroundColor: "black",
        borderRadius: "20px" 
    }

    const cssTBH = {
        marginTop: "0px"
    } 

    return(
        <div style={cssDivWrapper} onClick={()=>{console.log(this)}}>
            <h2 style={cssTBH}>{headerType}</h2>
        </div>
    )
    
}

export default HeaderButton