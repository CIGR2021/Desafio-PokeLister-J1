import Pagination from "./Pagination";
import React, { useEffect, useState } from "react";
import { getAll } from "../services/api";
import CardComponent from './Card';
import { Container } from "@mui/material";

function CardList() {
  const [pokemons, setPokemons] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [itensPerPage, setItensPerPage] = useState(24)
  const pages = Math.ceil(pokemons.length / itensPerPage)
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentPokemons = pokemons.slice(startIndex, endIndex)
  const OFFSET = currentPage;
  const LIMIT_TOTAL_POKEMONS = 150;

  const getAllPokemons = async() => {
    const data = await getAll(OFFSET, LIMIT_TOTAL_POKEMONS)
    setPokemons(data)
  }

  useEffect(() => {
    getAllPokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container maxWidth="lx">
      <section className="card-list">
        { currentPokemons.map((pokemon) => (
          <CardComponent key={ pokemon.name } pokemon={ pokemon } />
        ))}
      </section>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itensPerPage={itensPerPage}
        setItensPerPage={setItensPerPage}
      />
    </Container>
  )
}

export default CardList;
