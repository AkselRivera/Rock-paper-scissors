import React from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './item.module.css';


function Item({name=null, }) {


  let navigate= useNavigate();
  let color= name?.color || '( circle, rgba(23,34,62,255) 96%, rgba(23,34,62,255)';

    let style ={
        background: 'radial-gradient' +color,
    }

    const handleSelection = ()=>{

      if(name.clicked){

      }
      else{
        name.clicked=true
      navigate('/result',{state:name, replace:true});
    
      }
    } 


  return (
    <div  className={ !name ? styles.loading : styles.div} 
          style={style}
          onClick={ handleSelection}
    >
      { !!name &&
        <div className={styles.image}>
            <img src={name?.image } alt=''/>
        </div>
      }
    </div>
  )
}

export default Item