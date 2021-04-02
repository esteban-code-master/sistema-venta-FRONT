import React from 'react'
import IconSeaarch from '../../../../public/icon/search.png'
const Search = () => {
    return(
        <React.Fragment>
            <div className = "search">
                <input className = "search__input"  type = "search" placeholder = "Search ..."/>
                <span className = "search__box">
                    <img className = "search__img" src = {IconSeaarch} />
                </span>
            </div>
        </React.Fragment>
    )   
}

export default Search