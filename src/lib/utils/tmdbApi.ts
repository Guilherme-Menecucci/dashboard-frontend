import { env } from '~@env/server.mjs';
import { movies_v3 } from '~@types/lib/utils/api/tmdb/movies/v3';

const abortApiController = new AbortController();

function fetchTMDBApi<T>(fetchUrl: string) {
  return new Promise<T>((resolve, reject) => {
    const url = new URL(env.NEXT_PUBLIC_TMDB_URL + fetchUrl);
    url.search = new URLSearchParams({ api_key: env.TMDB_V3_KEY, language: 'en-US' }).toString();

    fetch(url)
      .then(res => res.json())
      .then(res => {
        const { status, statusText } = res;

        if (status >= 400) {
          reject({ status, statusText });
          return;
        }

        resolve(res);
      })
      .catch(reject);
  });
}

export { abortApiController, fetchTMDBApi };
