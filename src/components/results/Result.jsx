import React, { useContext, useEffect } from 'react';
import Item from '../items/Item';
import style from './result.module.css';


import paper from '../../images/icon-paper.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ContextOption } from '../../context/ContextProvider';
import { useChoice } from '../../logic/useChoice';

const Result = () => {

    const context = useContext(ContextOption);

    const {state}= useLocation();
    const navigate = useNavigate();
    const name2 = state.name;

    
    console.log('Jugador',state);
    const computer =useChoice(state.id)
    console.log(computer); 


    const handleReset =()=>{
        
        navigate('/',{ replace:true});
        context[name2].clicked=false;
    }


    
return (
    <div className={style.resultDiv}>
        <div className={style.resultItems1}>
            <span>Your choice</span>
            <span>The house choice</span>
        </div >

        <div className={style.resultItems2}>
            <Item name={state} />
            <div className={style.notice}>
                <span>Ganastes</span>
                <Button className={style.button}  variant="outline-light px-5"  onClick={handleReset}>
                    Play Again
                </Button> 
            </div>
            <Item name={computer} />
        </div>

        
    </div>
)
}

export default Result