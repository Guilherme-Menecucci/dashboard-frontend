import { Api } from '~@types/_api';
import { movies_v3 } from '~@types/lib/utils/api/tmdb/movies/v3';

export interface IDashboardProps {
  movies: {
    trending: movies_v3.Schema$Movie[];
    nowPlaying: movies_v3.Schema$Movie[];
    popular: movies_v3.Schema$Movie[];
    topRated: movies_v3.Schema$Movie[];
    upcoming: movies_v3.Schema$Movie[];
  };
  cardsData: Api.TCards;
}
