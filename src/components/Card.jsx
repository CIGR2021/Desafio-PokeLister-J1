import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getByName } from '../services/api';

function Card(props) {
  const [pokemons, setPokemons] = useState([])
  const { pokemon } = props
  const name = pokemons.name
  // console.log(props)

  const dataPokemon = async() => {
    const result = await getByName(pokemon.name)
    setPokemons({
      name: result.name,
      image: result.sprites.front_default
    })
    return result
  }

  useEffect(() => {
    dataPokemon();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className='card App App-header'>
      <ul>
        <Link to={`/pokemon/${pokemon.name}`}>
          <img
            src={`${pokemons.image}`}
            alt={pokemons.nome}
            />
          <li>
            {name}
          </li>
        </Link>
      </ul>
    </main>
  );
}

export default Card;
