import { client } from './client';

/**
 * Get all books requests using Axios.
 *
 * @requires module{Axios}
 * @exports
 * @public
 */
export const getAllBooks = () => client.get('Books');

export default getAllBooks;
