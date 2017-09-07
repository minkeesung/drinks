import axios from 'axios';

const API_KEY = '46f271e7f4724aaaa07e8b14867b31ed';
const ROOT_URL = ` http://addb.absolutdrinks.com/drinks/with`;

// `lemon-juice/for/evening/?apiKey=46f271e7f4724aaaa07e8b14867b31ed`;

export const FETCH_DRINKS = 'FETCH_DRINKS';

export function fetchDrinks(ingredient) {
  const url = `${ROOT_URL}/${ingredient}/?apiKey=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_DRINKS,
    payload: request
  };
}

// http://addb.absolutdrinks.com/drinks/with/lemon-juice/?apiKey=46f271e7f4724aaaa07e8b14867b31ed.
//
// http://addb.absolutdrinks.com/drinks/with/ginger/for/evening/?apiKey=46f271e7f4724aaaa07e8b14867b31ed
