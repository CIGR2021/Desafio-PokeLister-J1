import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getAll = async(offset, limit) => {
  try {
    const dataUrls = await axios.get(`${API_URL}?offset=${offset}&limit=${limit}`);
    return dataUrls.data.results
  } catch (err) {
    console.log(err)
  }
};

export const getByName = async(name) => {
  try {
    const result = await axios.get(`${API_URL}/${name}`);
    return result.data
  } catch (err) {
    console.log(err)
  }
};