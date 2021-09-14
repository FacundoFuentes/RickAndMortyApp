import React from 'react'
import CardItem from './CardItem'
import SearchBar from './SearchBar'
import './styles/Cards.css'

function CardsSingle({character, onSearch, onClose}) {


    if (character)
    return (
        <div className='cards'>
            {/* <h1>Utiliza la barra de busqueda</h1> */}
            <SearchBar onSearch={onSearch}/>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        {character.map((c) => 
                            <CardItem 
                            name={c.name}
                            status={c.status}
                            species={c.species}
                            location={c.location}
                            img={c.img}
                            key={c.id}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsSingle