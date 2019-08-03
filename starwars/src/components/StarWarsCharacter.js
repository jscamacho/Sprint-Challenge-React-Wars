import React from 'react';
import styled from 'styled-components'

const WrapperDiv = styled.div`
    width:40%;
    margin-right:0;
    margin-bottom: 25px;
    padding:15px;
    -webkit-box-shadow: 10px 10px 51px 16px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 51px 16px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 51px 16px rgba(0,0,0,0.75);
    `;

const H1Wrap = styled.h1`
    color:darkred;
    -webkit-box-shadow: 10px 10px 51px 16px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 51px 16px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 51px 16px rgba(0,0,0,0.75);
`;

const TextDiv = styled.div`
    font-weight:bold;
    font-size:24px;
    font-style: italic;
    font-family: fantasy;
    margin-right:5px;
`;

const pText =  styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color:green;
    background-color:blanchedalmond;
    font-size:18px;
    font-weight: bold;
    font-style: italic;
    font-family: cursive
`;

const StarWarsCharacter = (props) => {
    return (
        <WrapperDiv>
            <H1Wrap>Lest find out about {props.obj.name}</H1Wrap>
            <TextDiv>
                <TextDiv>{props.obj.name}</TextDiv>
                <pText>
                    <h3>DOB: </h3><span>{props.obj.birth_year}</span>
                    <h3>Eye Color </h3><span>{props.obj.eye_color}</span>
                    <h3>Gender: </h3><span>{props.obj.birth_gender}</span>
                    <h3>Hair Color </h3><span>{props.obj.hair_color}</span>
                    <h3>Height: ↓</h3><span>{props.obj.height}</span>
                    <h3>Mass ↓</h3><span>{props.obj.mass}</span>
                    <h3>Skin Color</h3><span>{props.obj.skin_color}</span>
                </pText> 
            </TextDiv>      
        </WrapperDiv>
    )
}
export default StarWarsCharacter;