import React, { useEffect, useState } from "react";
import { getAll } from "../services/api";
import Card from './Card';
import Pagination from "./Pagination";

function CardList() {
  const [pokemons, setPokemons] = useState([])
  const [offset, setOffset] = useState(0)
  const OFFSET = offset;
  const LIMIT = 24;
  const getAllPokemons = async() => {
    const data = await getAll(OFFSET, LIMIT)
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
      <Pagination />
    </main>
  )
}

export default CardList;
