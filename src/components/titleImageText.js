 
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faImage  } from '@fortawesome/free-regular-svg-icons'
import { faHeading } from '@fortawesome/free-solid-svg-icons'  
 
const TitleImageText = (props) => { //Or const Header = ({title})
    //or  {title} instead of {props.title} on line 4

return ( 
    <header className="titleImageText">
        <div onMouseEnter={(e) => {props.setHoverState("heading")}} ><FontAwesomeIcon className="faSize" icon={faHeading} /></div>
        <div onMouseEnter={(e) => {props.setHoverState("paragraph")}}><FontAwesomeIcon className="faSize" icon={faEdit}  /></div>
        <div onMouseEnter={(e) => {props.setHoverState("image")}}><FontAwesomeIcon className="faSize" icon={faImage}  /></div>
    </header> 
)
}
 
export default TitleImageText