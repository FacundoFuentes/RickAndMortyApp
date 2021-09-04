import React from 'react'
import {NavLink} from 'react-router-dom'

function CardItem({name, status, species, location, img }) {
    return (
        <>
            <div className="cards__item">
                <NavLink className='cards__item__link' to='/' >
                    <figure className="cards__item__pic-wrap" data-category={`${name} - ${status}`}>
                        <img src={img} alt="Not Found" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">
                            {`${species} - ${location}`}
                        </h5>
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default CardItem
