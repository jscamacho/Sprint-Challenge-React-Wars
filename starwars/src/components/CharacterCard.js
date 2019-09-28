import React from 'react';
import {Card, Icon} from "semantic-ui-react";

const CharacterCard = props => {
  const {name, birth_year, films} = props;
  let filmText = 'films';

  if (films === 1) {
    filmText = 'film';
  }

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>Born: {birth_year}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <p><Icon name='film' /> {`Appeared in ${films} ${filmText}`}</p>
      </Card.Content>
    </Card>
  )
};

export default CharacterCard; 