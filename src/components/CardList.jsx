import React, { useEffect, useState } from "react";
import { getAll } from "../services/api";
import Card from './Card';

function CardList() {
  const [pokemons, setPokemons] = useState([])

  const getAllPokemons = async() => {
    const data = await getAll()
    setPokemons(data)
  }

  useEffect(() => {
    getAllPokemons();
  }, [])

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
