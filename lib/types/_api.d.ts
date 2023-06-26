import { App } from './_app';

declare namespace TMDBApi {
  export type Schema$Movie = {
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
  };

  export type TMovies = {
    dates: { maximum: string; minimum: string };
    page: number;
    results: TMovie[];
    total_pages: number;
    total_results: number;
  };
}

declare namespace Api {
  export type TNavOption = {
    // icon: IconType;
    icon: string;
    title: string;
    href: string;
  };

  export type TNavOptions = TNavOption[];

  export type TProviderId = 'google' | 'github' | 'discord';

  export type TProvider = {
    id: TProviderId;
    src: string;
    callback?: string;
  };

  export type TProviders = TProvider[];

  export type TCard = {
    color: App.TThemeColors;
    icon: string;
    title: string;
    value: number;
    message: string;
  };

  export type TCards = TCard[];

  export type TSession = {
    authToken: string;
    displayName: string;
    id: string;
    login: string;
    roles: string[];
  };

  export type TSessionApi = {
    session: TSession;
    maxAge: number;
  };
}
