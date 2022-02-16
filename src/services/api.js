import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

// https://pokeapi.co/api/v2/pokemon-form/
export const getAll = async() => {
  try {
    const dataUrls = await axios.get(`${API_URL}-form?offset=0&limit=150`);
    return dataUrls.data.results
  } catch (err) {
    console.log(err)
  }
};

// export const getByName = async(name) => {
//   try {
//     return await axios.get(`${API_URL}{name}`);
//   } catch (err) {
//     console.log(err)
//   }
// };