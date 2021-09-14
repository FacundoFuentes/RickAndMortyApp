import React, {useState} from 'react'
import '../../App.css'
import CardsSingle from '../CardsSingle'
import '../styles/SingleCharacter.css'

export default function Product() {

    const [character, setCharacter] = useState([])

    function onClose(id) {
        setCharacter(char => char.filter(c => c.id !== id))
    }

    function onSearch(character) {
        fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then(r => r.json())
        .then((recurso) => {
            if (recurso.name !== undefined){
                const character = {
                    name: recurso.name,
                    status: recurso.status,
                    species: recurso.species, 
                    location: recurso.location.name,
                    img: recurso.image,
                }
        setCharacter(oldCharacters => [...oldCharacters, character]);
            } else alert('Personaje no encontrado')

        })
    }


    return (
    <div className='container-single-char'>
        <h1 className='products single-character'>BUSCA UN PERSONAJE POR ID</h1>
        <CardsSingle character={character} onSearch={onSearch} onClose={onClose}/>
    </div>
    )
} 