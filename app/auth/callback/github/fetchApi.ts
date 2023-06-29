'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getGithubSession } from 'src/lib/api/githubSession';
import { useSession } from '~@lib/context/session.context';

const abortApiController = new AbortController();

export default function useGithubApi({ code }: { code: string }) {
  const router = useRouter();

  const [prerenderCompleted, setPrerenderCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { saveSession } = useSession();

  useEffect(() => {
    if (!prerenderCompleted) {
      return () => {
        setPrerenderCompleted(true);
      };
    }

    (async () => {
      getGithubSession(code)
        .then(res => {
          setLoading(false);

          saveSession(res);

          router.replace('/');

          // setTimeout(() => {
          //   window.location.assign('/dashboard');
          // }, 1500);
        })
        .catch(() => {
          setLoading(false);
          setHasError(true);
        });
    })();

    return () => {
      if (abortApiController) {
        setLoading(true);
        setHasError(false);
        abortApiController.abort();
      }
    };
  }, [code, prerenderCompleted, router, saveSession]);

  return [loading, hasError];
}
