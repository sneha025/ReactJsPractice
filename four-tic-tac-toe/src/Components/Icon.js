import React from 'react';
import {FaTimes,FaPen, FaRegCircle} from 'react-icons/fa';


const Icon = ({name}) =>{  // name is destructured prop

    switch (name){
        case 'circle':
            return <FaRegCircle className="icon"/>
        case 'cross':
            return <FaTimes className="icon"/>
        default:
            return <FaPen className="icon"/>
    }
}

export default Icon;