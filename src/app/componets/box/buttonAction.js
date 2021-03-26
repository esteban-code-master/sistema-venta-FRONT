import React from 'react'
import './style.scss'

const ButtonAction = (props) => {

    const {name,img} = props

    return(
        <React.Fragment>
            <div className = "buttonAction">
                <span className = "buttonAction__box">
                    <img className = "butonAction__img" src = {img} />
                </span>
                <span className = "buttonAction__name">
                    {name}
                </span>
            </div>
        </React.Fragment>
    )
}

export default ButtonAction