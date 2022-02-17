import { Card as CardUi, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
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

  const preventDefault = (event) => event.preventDefault();

  return (
    <Box
      onClick={preventDefault}
    >
      <Container
        className="card"
        sx={{
          display: 'flex',
          maxWidth: 480,
          textAlign: 'center',
          marginTop: 2
        }}
      >
        <CardUi>
          <CardActionArea>
            <Link to={`/pokemon/${pokemon.name}`}>
              <CardMedia
                  component="img"
                  height="150"
                  image={`${pokemons.image}`}
                  alt={name}
              />
              <CardContent>
                <Typography>
                  <h1>{name}</h1>
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </CardUi>
      </Container>
    </Box>
  );
}

export default Card;
