import React from 'react'
import './StarWars.css';
import StarChar from './StarChar';


const StarWarsCharMap = props => {
    return(
        <div>
            {props.characters.map((character, index) => 
                (
                    <div>
                        <StarChar character={character} key={index}/>
                    </div>
                ))}
        </div>
    )
} 


export default StarWarsCharMap;
