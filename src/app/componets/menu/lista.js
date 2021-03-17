import React from 'react'

const List = (props) => {
    const {icon,text} = props

    return(
        <React.Fragment>
            <li className = "menu__option-li">
                <span> 
                    <img src= {icon}/>
                    <span>{text}</span>
                </span>
            </li>
        </React.Fragment>
    )
}

export default List