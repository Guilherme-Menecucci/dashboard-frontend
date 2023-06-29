'use client';
import useGithubApi from './fetchApi';

export default function Page({ searchParams }: { searchParams: { code: string } }) {
  const [loading, hasError] = useGithubApi(searchParams);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {loading
        ? 'Loading Data...'
        : hasError
        ? 'Something went wront'
        : "Ur goin' redirect to dashboard"}
    </div>
  );
}
