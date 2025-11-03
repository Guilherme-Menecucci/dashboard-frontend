import React from 'react';

type TRowCustomProps = {
  children: React.ReactNode;
  className?: string;
  flex?: boolean;
  style?: React.CSSProperties | undefined;
  rowSpan: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colSpan: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

type TRowProps = Optional<Omit<HTMLDivElement, keyof TRowCustomProps>> & TRowCustomProps;

export { TRowProps };
