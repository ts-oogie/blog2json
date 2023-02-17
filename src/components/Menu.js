import Item from './Item'

const Menu = ({items}) => {
    
    return(
        <>
        {items.map((item) => (
            <Item key={item.key} text={item.text}/>
        ))}
        </>
    )
}

export default Menu