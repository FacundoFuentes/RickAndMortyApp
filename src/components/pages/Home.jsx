import '../../App.css'
import HeroSection from '../HeroSection.jsx'
import React, {useState, useEffect} from 'react'
import Cards from '../Cards'
import Footer from '../Footer'


function Home () {

    function randomizer() {

        let arr = []

        for (let i = 0; i < 3; i++) {
            arr.push(Math.ceil(Math.random() * 500))
            
        }

        return arr.join(',')
    }

    const [characters, setCharacters] = useState([])
    const [dataFetch, setDataFetch] = useState(false)


    useEffect(() =>{
            //Tengo que traer todos los PJ's de una sola vez
            fetch(`https://rickandmortyapi.com/api/character/${randomizer()}`)
            .then(r => r.json())
            .then((recurso) => {
                //{name, status, species, location, img }
                const character = recurso
                setCharacters(oldCharacters => [...oldCharacters, character])
                setDataFetch(true)
            })
    } ,[])

    return(
        <>
        <HeroSection/>
        {dataFetch && (<Cards char={characters}/>)}
        <Footer/>
        </>
    )
}

export default Home