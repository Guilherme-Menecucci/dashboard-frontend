'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getGithubSession } from 'src/lib/api/githubSession';
import { useSession } from '~@lib/context/session.context';
import { useToast } from '~@lib/context/toast.context';

const abortApiController = new AbortController();

export default function useGithubApi({ code }: { code: string }) {
  const router = useRouter();
  const { addToast } = useToast();

  const [prerenderCompleted, setPrerenderCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { saveUser } = useSession();

  useEffect(() => {
    if (!prerenderCompleted) {
      return () => {
        setPrerenderCompleted(true);
      };
    }

    (async () => {
      getGithubSession(code)
        .then(res => {
          const { message, data } = res;

          setLoading(false);

          addToast({
            type: 'success',
            description: message,
          });
          saveUser(data);

          router.replace('/');
        })
        .catch(() => {
          setLoading(false);
          setHasError(true);

          addToast({
            type: 'error',
            description: 'Something went wrong.',
          });

          router.replace('/login');
        });
    })();

    return () => {
      if (abortApiController) {
        setLoading(true);
        setHasError(false);
        abortApiController.abort();
      }
    };
  }, [code, prerenderCompleted, router, saveUser]);

  return [loading, hasError];
}
