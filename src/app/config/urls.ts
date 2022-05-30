import {environment} from '../../environments/environment';

const {API} = environment;

const API_KEY = 'aa0167a9-641e-48c2-b0af-2b877732b00e';

export const urls = {
  recipes: `${API}?key=${API_KEY}`,
  // recipe: `${API}?key=${API_KEY}`,
}
