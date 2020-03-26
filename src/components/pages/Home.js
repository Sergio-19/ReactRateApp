import React, {useContext} from 'react'
import './home.scss'
import { RateContext } from '../../context/RateContext';
import { SwitchRate } from '../switchRate/SwitchRate';

export const Home = () =>{

    const {state} = useContext(RateContext)

    return(
        <div style = {{width: '80%', margin: '0 auto' }}>
        <div className = "date"><h3>Курс валют на {state.date}&nbsp; Базовая валюта:</h3> <SwitchRate/></div>

            <div style = {{display: 'flex', justifyContent: 'space-between'}}>
            <div className="head"><h1>{state.base === 'RUB' ? 'Базовая валюта' : 'RUB'}</h1>
            <p>{state.base === 'RUB' ? '' : '1RUB = 33 rub'}</p>
            </div>
            

            <div className="head"><h1>{state.base === 'USD' ? 'Базовая валюта' : 'USD'}</h1>
            <p>{state.base === 'USD' ? '' : '1USD = 33 rub'}</p>
            </div>

            <div className="head"><h1>{state.base === 'EUR' ? 'Базовая валюта' : 'EUR'}</h1>
                <p>{state.base === 'EUR' ? '' : '1EUR = 33 rub'}</p>
            </div>
            </div>


            <div className="jumbotron jumbotron-fluid bg-primary "  style = {{margin: '30px auto', borderRadius: '5px', display: 'flex', justifyContent: 'center', color: 'white'}}>
            <div>
            <p>Я хочу обменять:</p>
            {/* <div style = {{display: 'flex', flexDirection: 'column'}}>
               <div ><input type = "radio" style = {{marginBottom: '10px'}}/> <p>Купить</p></div> 
                <div ><input type = "radio" style = {{marginBottom: '10px'}}/> <p>Продать</p></div>
            </div> */}

            <div>
                <input type = "text"/>
                <select><option>RUB</option></select>
            </div>
            <div>
                <p>USD 150</p>
                <p>USD 150</p>
                <p>USD 150</p>
            </div>
            <div>
            <button type="button" className="btn btn-secondary">Посчитать</button>
            </div>
        </div>
      </div>
      
      
      </div>
    )
}