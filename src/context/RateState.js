import React from 'react'
import {RateContext} from './RateContext'


export const RateState = (props) =>{


    return(
        <RateContext.Provider value = {{state: props.state}}>
            {props.children}
        </RateContext.Provider>
    )
}