import React from 'react'
import './switchDateWrap.scss'
import { SwitchDate } from '../switchDate/SwitchDate';

export const SwitchDateWrap = () =>{


    let yearArray = [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
                     2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

    let dayArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];

    let monthArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

    return(
        <div>
            <h3 style = {{marginRight: '360px'}}>Курс валют на:&nbsp;
            <div>
                <SwitchDate
                
                yearArr = {yearArray}
                dayArr = {dayArray}
                monthArray = {monthArray}
                /> 
            </div>
               



            </h3>

        </div>
    )
}