import React, { useEffect, useState } from "react";
import { getAll } from "../services/api";
import Context from './Context'

function Provider({ children }) {
  const [pokemons, setPokemons] = useState([])

  const getAllPokemons = async() => {
    const data = await getAll()
    setPokemons(data)
  }

  useEffect(() => {
    getAllPokemons();
  }, [])

  const states = { pokemons }
  
  return (
    <Context.Provider value={ states }>
      { children }
    </Context.Provider>
  )
}
export default Provider;