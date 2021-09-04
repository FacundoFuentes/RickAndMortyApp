import React from 'react'
import '../App.css'
import { Button } from './Button'
import './styles/HeroSection.css'
import Video2 from '../media/videos/rickandmorty.mp4'


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={Video2} autoPlay loop muted></video>
            
            <h1>RICK AND MORTY APP</h1>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' path={'single-character'}>
                    BUSCA UN PERSONAJE
                </Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' path={'/sign-up'}>
                    TRAILER <i className='far fa-play-circle' ></i>
                </Button>
            </div>
            
        </div>
    )
}

export default HeroSection
