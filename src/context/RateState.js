import React from 'react'
import {RateContext} from './RateContext'


export const RateState = (props) =>{


    return(
        <RateContext.Provider value = {{state: props.state, 
                                        baseRateHandler: props.baseRateHandler,
                                        yearHandler: props.yearHandler,
                                        monthHandler: props.monthHandler,
                                        dayHandler: props.dayHandler,
                                        
                                        }}>
            {props.children}
        </RateContext.Provider>
    )
}