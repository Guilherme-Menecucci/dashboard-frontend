import clsx from 'clsx';
import React, { forwardRef, MouseEvent, useEffect, useState } from 'react';

import { TRippleProps } from '~@types/components/Ripple';

const Ripple = forwardRef<HTMLSpanElement, TRippleProps>(({ disabled = false }, ref) => {
  const [isRippling, setIsRippling] = useState(false);
  const [data, setData] = useState({ left: -1, top: -1, width: '100%', height: '100%' });

  useEffect(() => {
    if (data.left !== -1 && data.top !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 1000);
    } else setIsRippling(false);
  }, [data.left, data.top, data.width, data.height]);

  useEffect(() => {
    if (!isRippling) setData({ left: -1, top: -1, width: '100%', height: '100%' });
  }, [isRippling]);

  const handleClick = (e: MouseEvent<HTMLSpanElement>) => {
    if (disabled) return;

    const parent = e.currentTarget.parentElement;
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);

    setData({
      left: e.clientX - rect.left,
      top: e.clientY - rect.top,
      width: diameter / 6 + 'px',
      height: diameter / 6 + 'px',
    });
  };

  return (
    <span
      className={clsx(
        'absolute block h-full w-full rounded-full bg-black/25 opacity-0',
        isRippling && 'animate-ripple',
      )}
      onClick={handleClick}
      style={data}
      ref={ref}
    />
  );
});

Ripple.displayName = 'Ripple';

export default Ripple;
