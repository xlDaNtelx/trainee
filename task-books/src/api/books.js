import { apiURL } from './consts';
import { client } from './client';

client.defaults.baseURL = apiURL;
client.defaults.timeout = 2000;

export const getBooks = client.get('Books');