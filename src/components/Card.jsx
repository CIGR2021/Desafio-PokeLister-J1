import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  const { pokemon } = props

  return (
    <main className='card App App-header'>
      <ul>
        <Link to="#"><li>{pokemon.name}</li></Link>
      </ul>
    </main>
  );
}

export default Card;
