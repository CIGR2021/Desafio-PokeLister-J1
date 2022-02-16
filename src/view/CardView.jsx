import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getByName } from '../services/api';

function CardView(props) {
  const [pokemon, setPokemons] = useState([])
  const { params } = props.match
  const name = pokemon.name
  const dataPokemon = async() => {
    const result = await getByName(params.name)
    // const arrayAbilities = result.abilities.map((item) => <li>item.ability.name</li>)
    setPokemons({
      name: result.name,
      image: result.sprites.front_default,
      habilidades: result.abilities
    })

    return result
  }

  useEffect(() => {
    dataPokemon();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      <header>
        <Link to="/">Voltar</Link>
      </header>
      <section>
        <img
          src={`${pokemon.image}`}
          alt={name}
          />
        <li>
          {name}
        </li>
        <section>
          <h2>Abilities</h2>
          {!pokemon
            || !pokemon.habilidades
            || pokemon.habilidades
              .map((item) => (<li key={item.ability.name}>{item.ability.name}</li>))}
        </section>
      </section>
    </main>
  );
}

export default CardView;
