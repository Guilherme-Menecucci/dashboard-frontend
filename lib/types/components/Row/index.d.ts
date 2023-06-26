import React from 'react';

type TRowCustomProps = {
  children: React.ReactNode;
  className?: string;
  flex?: boolean;
  style?: React.CSSProperties | undefined;
};

type TRowProps = Optional<Omit<HTMLDivElement, keyof TRowCustomProps>> & TRowCustomProps;

export { TRowProps };
