'use client';
import Image from 'next/image';

import { TProvidersProps } from '~@types/components/Providers';
import HoverComponent from '~@components/HoverComponent';

const Providers = ({ providers }: TProvidersProps) => {
  if (!providers.length) return <span>Loading...</span>;

  const handleClick = (callback?: string) => {
    if (!callback) return;

    window.location.assign(callback);
  };

  return (
    <div className="flex w-full flex-wrap justify-around gap-4">
      {providers.map(provider => (
        <HoverComponent key={provider.id} color="primary-variant">
          <button
            onClick={() => handleClick(provider.callback)}
            className="aspect-square overflow-hidden p-4 backdrop-blur-sm"
          >
            <div className="relative h-12 w-12">
              <Image
                alt={'Log with ' + provider.id}
                src={provider.src}
                fill
                className="object-contain"
              />
            </div>
          </button>
        </HoverComponent>
      ))}
    </div>
  );
};

export default Providers;
