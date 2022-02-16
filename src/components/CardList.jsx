import React, { useContext } from "react";
import Context from "../context/Context";
import Card from './Card';

function CardList() {
  const { pokemons } = useContext(Context);

  return (
    <main>
      <section className="card-list">
        { pokemons.map((pokemon) => (
          <Card key={ pokemon.name } pokemon={ pokemon } />
        ))}
      </section>
    </main>
  )
}

export default CardList;
