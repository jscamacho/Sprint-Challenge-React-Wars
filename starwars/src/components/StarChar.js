import React from 'react';
import './StarWars.css';

import { Card } from 'semantic-ui-react';

const StarChar = props => {
    return (
        <div>
            <br />
            <Card color="blue" className="card" style={{ margin: "auto", opacity: 0.95, boxShadow: "30px 10px #4f5b81", borderRadius: "80px"}}> 
                
                <Card.Content>
                    <br/>
                    <Card.Header ><h3 className="cardTitle">{props.character.name}</h3></Card.Header>
                    < Card.Meta> Age: {props.character.birth_year} </Card.Meta>
                    <Card.Description> Gender: {props.character.gender} </Card.Description>
                    <Card.Description> Height: {props.character.height} </Card.Description>
                    <Card.Description>Mass: {props.character.mass}</Card.Description>
                </Card.Content>
            </Card>
        </div>

    )
}




export default StarChar;
