export declare namespace movies_v3 {
  export interface Options {
    version: '3';
  }

  export interface Schema$Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  export interface Schema$Movies {
    dates: { maximum: string; minimum: string };
    page: number;
    results: Schema$Movie[];
    total_pages: number;
    total_results: number;
  }
}
