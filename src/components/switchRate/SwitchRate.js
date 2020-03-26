import React from 'react'
import './switchRate.scss'


export const SwitchRate = () =>{


    return(
        <div className = 'switchRate'>
            <span className = "base">RUB <i className="fa fa-chevron-down" aria-hidden="true"/></span>
            <ul>
                <li><span>RUB</span></li>
                <li><span>USD</span></li>
                <li><span>EUR</span></li>
            </ul>
        </div>
    )
}