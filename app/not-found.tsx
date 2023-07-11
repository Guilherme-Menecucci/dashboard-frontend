import { Metadata } from 'next';
import Image from 'next/image';

import Typography from '~@components/Typography';

export const metadata: Metadata = {
  title: 'Plan-O-Rama - Not Found',
};

export default function NotFound() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Image
        alt=""
        src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
        className="absolute h-full w-full object-cover"
        fill
      />
      <div className="absolute inset-0 bg-black opacity-25"> </div>
      <div className="container relative z-10 mx-auto flex items-center px-6 py-32 md:px-12 xl:py-40">
        <div className="relative z-10 flex w-full flex-col items-center font-mono">
          <Typography
            component="h1"
            size="large"
            variant="display"
            className="font-extrabold text-white"
          >
            You are all alone here
          </Typography>
          <Typography
            component="p"
            size="large"
            variant="display"
            className="my-36 animate-bounce text-9xl font-extrabold text-white"
          >
            404
          </Typography>
        </div>
      </div>
    </div>
  );
}
