import { env } from '~@env/client.mjs';
import { Api } from '~@types/_api';

const abortApiController = new AbortController();

function fetchTMDBApi(code: string) {
  return new Promise<Api.TSessionApi>((resolve, reject) => {
    const url = new URL(env.NEXT_PUBLIC_API_URL + '/auth/callback/github');
    url.search = new URLSearchParams({ code }).toString();

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
