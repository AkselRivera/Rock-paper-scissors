import React, { useContext } from 'react'
import { ContextOption } from '../../context/ContextProvider';
import Item from '../items/Item';
import styles from './selection.module.css';

// import scissors from '../../images/icon-scissors.svg';
// import rock from '../../images/icon-rock.svg';
// import paper from '../../images/icon-paper.svg';

function Selection() {

const contextOp = useContext( ContextOption );

  return (
    <div className={styles.seleccion}>

        <Item name={contextOp.Paper} color='(hsl(230, 89%, 62%) ,hsl(230, 89%, 65%))' />
        <Item name={contextOp.Scissors} color='(hsl(39, 89%, 49%) , hsl(40, 84%, 53%))' />
        <Item name={contextOp.Rock} color='(hsl(349, 71%, 52%) , hsl(349, 70%, 56%))' />
        
    </div>
  )
}

export default Selection