import React from 'react'
//import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faImage, faFile} from '@fortawesome/free-regular-svg-icons'
import { faHeading, faCode  } from '@fortawesome/free-solid-svg-icons'  
 
const TitleImageText = (props) => { //Or const Header = ({title})
    //or  {title} instead of {props.title} on line 4

return ( 
    <header className="titleImageText">
        <div id="fileBtn" onMouseEnter={(e) => {props.setHoverState("heading")}} ><FontAwesomeIcon className="faSize" icon={faFile} /></div>
        <div id="codeBtn" onMouseEnter={(e) => {props.setHoverState("code")}} ><FontAwesomeIcon className="faSize" icon={faCode} /></div>
        <div id="headingBtn" onMouseEnter={(e) => {props.setHoverState("heading")}} ><FontAwesomeIcon className="faSize" icon={faHeading} /></div>
        <div id="paragraphBtn" onMouseEnter={(e) => {props.setHoverState("paragraph")}}><FontAwesomeIcon className="faSize" icon={faEdit}  /></div>
        <div id="imageBtn" onMouseEnter={(e) => {props.setHoverState("image")}}><FontAwesomeIcon className="faSize" icon={faImage}  /></div>
    </header> 
)
}
 
export default TitleImageText

 