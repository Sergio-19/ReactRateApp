import React, {useState, useContext} from 'react'
import './switchRate.scss'
import { RateContext } from '../../context/RateContext';


export const SwitchRate = () =>{

    const {baseRateHandler, state} = useContext(RateContext)

    const [value, setValue] = useState(false)

    let cls = ["rateList"]
    if(value){ cls.push('rateListShow')}

    let currentArr = [ {name: 'RUB', id: 'RUB'}, {name: 'USD', id: 'USD'}, {name: 'EUR', id: 'EUR'}]

    const showRateHandler = () =>{
        setValue(!value)
    }

    const newBaseHandler = (id) =>{
        setValue(!value);
        baseRateHandler(id)

    }

    return(
        <div className = 'switchRate'>
            <span className = "base"
                   onClick = {showRateHandler} 
            >{state.base} <i className= {`fa fa-chevron-${value ? 'up' : 'down'}`} aria-hidden="true"/></span>
            <div className = {cls.join(' ')}>
              <ul>
                {currentArr.map((curr, i)=>{
                    return(
                        <li key = {curr.id}
                            onClick = { () => newBaseHandler(curr.id)}
                        ><span>{curr.name}</span></li>
                    )
                })}
            </ul>  
            </div>
            
        </div>
    )
}