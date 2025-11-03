import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

const Card = ({
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
  span?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
}) => {
  return (
    <div
      className={clsx(
        'col-span-12 w-full sm:col-span-12 md:col-span-6 lg:col-span-6 lg:flex lg:max-w-full xl:col-span-4',
        className,
      )}
    >
      <div
        className="relative flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
        title="Woman holding a mug"
      >
        <div className="absolute w-full overflow-hidden p-[56.25%]">
          <Image
            src="https://www.fillmurray.com/192/192"
            fill
            objectFit="contain"
            alt=""
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full flex-col justify-between rounded-b border-x border-b border-gray-400 bg-white p-4 leading-normal lg:rounded-r lg:rounded-b-none lg:border-t lg:border-l-0 lg:border-gray-400">
        <div className="mb-8">
          <p className="flex items-center text-sm text-gray-600">
            <svg
              className="mr-2 h-3 w-3 fill-current text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <div className="mb-2 text-xl font-bold text-gray-900">
            Can coffee make you a better developer?
          </div>
          <p className="text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
            Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="flex items-center">
          <Image
            className="mr-4 h-10 w-10 rounded-full"
            src="https://www.fillmurray.com/40/40"
            width={40}
            height={40}
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="leading-none text-gray-900">Jonathan Reinink</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
      {/* <div className={clsx('rounded-lg border-2 p-4 shadow-md', spanClasses[span], className)}>
      {children}
    </div> */}
    </div>
  );
};

export default Card;
