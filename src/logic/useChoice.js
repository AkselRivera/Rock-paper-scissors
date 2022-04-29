import { useContext } from "react";
import { ContextOption } from "../context/ContextProvider";



export const useChoice = (id)=> {
    const item = useContext( ContextOption );

    const opc= Math.floor( Math.random() * (4 - 1) + 1 );
    let name='';

    if(opc===1)
        name='Paper'
    else if(opc===2)
        name='Rock'
    else if(opc===3)
        name='Scissors'

    if(opc===id){
        console.log('Empateeee perro');
    }

    // COMPUTADORA GANA
    if(id===1 && opc===2){
        console.log('Gano jugador');
    }

    if(id===1 && opc===3){
        console.log('Gano Compu');
    }

    if(id===2 && opc===1){
        console.log('Gano Computadora');
    }

    if(id===2 && opc===3){
        console.log('Gano Jugador');
    }
    
    if(id===3 && opc===1){
        console.log('Gano Jugador');
    }

    if(id===3 && opc===2){
        console.log('Gano Computadora');
    }

    // // JUADOR GANA
    // if(opc===1 && id===2){
    //     console.log('Gano Computadore');
    // }

    // if(opc===1 && id===3){
    //     console.log('Gano Jugador');
    // }

    // if(opc===2 && id===1){
    //     console.log('Gano juga');
    // }

    // if(opc===2 && id===3){
    //     console.log('Gano Computadora');
    // }

    // if(opc===3 && id===1){
    //     console.log('Gano Computadora');
    // }

    // if(opc===3 && id===2){
    //     console.log('Gano Jugador');
    // }

    return item[name];

}

