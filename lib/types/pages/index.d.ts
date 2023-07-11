import { movies_v3 } from '~@types/lib/utils/fetch/tmdb/movies/v3';

export interface IHomeProps {
  movies: movies_v3.Schema$Movie[];
}
