import axios from 'axios';
import { apiURL } from './consts';

export const client = axios.create();
client.defaults.baseURL = apiURL;