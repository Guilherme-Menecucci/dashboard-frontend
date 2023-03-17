/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getGithubSession, abortApiController } from '~@lib/api/session';

const GithubCallback = () => {
  const router = useRouter();

  const [prerenderCompleted, setPrerenderCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!prerenderCompleted) {
      return () => {
        setPrerenderCompleted(true);
      };
    }

    const code = router.query.code as string;

    (async () => {
      getGithubSession(code)
        .then(() => {
          setLoading(false);

          setTimeout(() => {
            window.location.assign('/dashboard');
          }, 1500);
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
  }, [prerenderCompleted]);

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        {loading
          ? 'Loading Data...'
          : hasError
          ? 'Something went wront'
          : "Ur goin' redirect to dashboard"}
      </div>
    </>
  );
};

export default GithubCallback;
