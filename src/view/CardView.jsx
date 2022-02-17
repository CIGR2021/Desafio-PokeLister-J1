import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
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
    <Box>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 3
        }}
        >
        <Card
          className="card"
          sx={{ maxWidth: 1200, textAlign: 'center' }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="550"
              width="550"
              image={`${pokemon.image}`}
              alt={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="section">
                <h1>{name}</h1>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h2>Abilities</h2>
                {!pokemon
                  || !pokemon.habilidades
                  || pokemon.habilidades
                    .map((item) => (<li key={item.ability.name}>{item.ability.name}</li>))}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="outlined"
              color="error"
              href="/"
            >
              Voltar
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
}

export default CardView;
