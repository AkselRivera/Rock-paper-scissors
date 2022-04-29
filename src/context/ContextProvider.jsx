
import scissors from '../images/icon-scissors.svg';
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import { createContext } from 'react';


export const option = {
    Paper: {
        id:1,
        name:'Paper',
        image: paper,
        color: "(hsl(230, 89%, 62%) ,hsl(230, 89%, 65%))",
        clicked:false,
    },
    Rock:{
        id:2,
        name:'Rock',
        image: rock,
        color: "(hsl(349, 71%, 52%) , hsl(349, 70%, 56%))",
        clicked:false,
    },
    Scissors: {
        id:3,
        name:'Scissors',
        image: scissors,
        color: "(hsl(39, 89%, 49%) , hsl(40, 84%, 53%))",
        clicked:false,
    },
};

export const ContextOption = createContext(null);

