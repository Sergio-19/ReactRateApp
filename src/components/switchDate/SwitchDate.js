import React, {useState, useContext} from 'react'
import './switchDate.scss'
import { RateContext } from '../../context/RateContext';


export const SwitchDate = (props) =>{

    const {state, yearHandler, monthHandler, dayHandler} = useContext(RateContext)

    const [date, setDate] = useState(false)
    const [month, setMonth] = useState(false)
    const [day, setDay] = useState(false)

    let clsyear = ["dateList"]
    let clsMonth = ["dateList"]
    let clsDay = ["dateList"]
    if(date){ clsyear.push('dateListShow')}

    if(month){ clsMonth.push('monthListShow')}

    if(day){ clsDay.push('dayListShow')}

    const showDateHandler = () =>{
        setDate(!date)
    }

    const showMonthHandler = () =>{
        setMonth(!month)
    }

    const showDayHandler = () =>{
        setDay(!day)
    }    

    return(
        <div className = "switchDateWrapper">
        <div className = 'switchDate'>
            <span className = "baseDate"
                   onClick = {()=> {showDateHandler(); showMonthHandler(); showDayHandler()}} 
            >{state.year}&nbsp;&nbsp;<i className= {`fa fa-chevron-${date ? 'up' : 'down'}`} aria-hidden="true"/></span>
            <div className = {clsyear.join(' ')}>
              <ul>
                {props.yearArr.map((value, i)=>{
                    return(
                        <li key = {value}
                            onClick = {() => { setDate(!date); yearHandler(value)} }
                        ><span>{value}</span></li>
                    )
                })}
            </ul>  
            </div>
            
        </div>




<div className = 'switchDate'>
<span className = "baseDate"
       onClick = {()=> {showDateHandler(); showMonthHandler(); showDayHandler()}} 
>{state.month}&nbsp;&nbsp;<i className= {`fa fa-chevron-${month ? 'up' : 'down'}`} aria-hidden="true"/></span>
<div 
className = {clsMonth.join(' ')}
>
<ul>
                {props.monthArray.map((value, i)=>{
                    return(
                        <li key = {value}
                            onClick = {() => { setMonth(!month); monthHandler(value)}  }
                        ><span>{value}</span></li>
                    )
                })}
            </ul>  
</div>

</div>  





 <div className = 'switchDate'>
            <span className = "baseDate"
                   onClick = {()=> {showDateHandler(); showMonthHandler(); showDayHandler()}} 
            >{state.day}&nbsp;&nbsp;<i className= {`fa fa-chevron-${day ? 'up' : 'down'}`} aria-hidden="true"/></span>
            <div 
            className = {clsDay.join(' ')}
            >
              <ul>
                {props.dayArr.map((value, i)=>{
                    return(
                        <li key = {value}
                            onClick = {() => { setDay(!day); dayHandler(value)}}
                        ><span>{value}</span></li>
                    )
                })}
            </ul>  
            </div>
            
        </div>
        
        </div>
    )
}