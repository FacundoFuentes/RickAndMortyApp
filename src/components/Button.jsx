import React from 'react'
import './styles/Button.css'
import { NavLink } from 'react-router-dom'

export const Button = ({children, type, onClick, buttonStyle, buttonSize, path='/'}) => {

    return(
        <NavLink to={path} className='btn-mobile'>
            <button
                className={`btn ${buttonStyle} ${buttonSize}`}
                onClick={onClick}
                type={type}
                
            >
                {children}
            </button>


        </NavLink>
    )
}