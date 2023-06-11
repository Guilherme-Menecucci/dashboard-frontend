import clsx from 'clsx';
import React from 'react';
import { App } from '~@types/_app';
import styles from './style.module.css';

interface HoverComponentProps {
  children: React.ReactNode;
  className?: string;
  color?: App.TThemeColors | 'black' | 'white';
}

const HoverComponent = ({ children, className, color = 'primary' }: HoverComponentProps) => {
  return (
    <div
      className={clsx(
        'group/hover relative hover:cursor-pointer',
        className,
        styles[`HoverComponent-${color}`],
      )}
    >
      <div className="absolute -top-2 left-0 h-0 w-0 origin-[left_center_0px] scale-0 border-y-[0.5rem] border-r-[0.5rem] border-transparent transition-transform duration-100 group-hover/hover:scale-100 group-hover/hover:duration-75" />
      <div className="absolute inset-y-0 left-0 w-2 origin-[0px_100%_0px] scale-x-0 transition-transform duration-100 group-hover/hover:scale-x-100 group-hover/hover:duration-75" />
      <div className="absolute inset-x-0 bottom-0 h-2 origin-[0px_100%_0px] scale-y-0 transition-transform duration-100 group-hover/hover:scale-y-100 group-hover/hover:duration-75" />
      <div className="absolute bottom-0 -right-2 h-0 w-0 origin-[center_bottom_0px] scale-0 border-x-[0.5rem] border-t-[0.5rem] border-transparent transition-transform duration-100 group-hover/hover:scale-100 group-hover/hover:duration-75" />
      <div className="h-full w-full border-2 transition-[border,transform] duration-100 group-hover/hover:translate-x-2 group-hover/hover:-translate-y-2 group-hover/hover:duration-75">
        {children}
      </div>
    </div>
  );
};

export default HoverComponent;
