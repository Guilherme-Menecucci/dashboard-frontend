import { movies_v3 } from '~@types/lib/utils/api/tmdb/movies/v3';

export interface IHomeProps {
  movies: movies_v3.Schema$Movie[];
}
