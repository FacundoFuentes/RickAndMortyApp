import React from 'react'
import CardItem from './CardItem'
import './styles/Cards.css'

function Cards(props) {
    console.log(props.char[0])
    return (
        <div className='cards'>
            <h1>¡Personajes Random!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {props.char && props.char[0].map((c) => 
                            <CardItem 
                            name={c.name}
                            status={c.status}
                            species={c.species}
                            location={c.location.name}
                            img={c.image}
                            key={c.id}
                            />
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
