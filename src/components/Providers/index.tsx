import Image from 'next/image';
import HoverComponent from '~@components/HoverComponent';

import { TProvidersProps } from '~@types/components/Providers';

const Providers = ({ providers }: TProvidersProps) => {
  if (!providers.length) return <span>Loading...</span>;

  const handleClick = (callback?: string) => {
    if (!callback) return;

    window.location.assign(callback);
  };

  return (
    <div className="flex w-full flex-wrap justify-around gap-4">
      {providers.map(provider => (
        <HoverComponent key={provider.id}>
          <button
            onClick={() => handleClick(provider.callback)}
            className="aspect-square overflow-hidden border-2 border-brutal-primary p-4 backdrop-blur-sm"
          >
            <div className="relative h-12 w-12">
              <Image
                alt={'Log with ' + provider.id}
                src={provider.src}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </button>
        </HoverComponent>
      ))}
    </div>
  );
};

export default Providers;
