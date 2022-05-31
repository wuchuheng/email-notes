import React, { useEffect, useRef } from 'react';

type WebkitAppRegionPropsType = {
  children: React.ReactNode | React.ReactNode[]
};
const WebkitAppRegion: React.FC<WebkitAppRegionPropsType> = (props) => {
  const ref = useRef<HTMLSpanElement>();
  useEffect(() => {
    ref.current.style.webkitAppRegion = 'drag';
  }, []);
  const handleClick = async (e: React.MouseEvent<HTMLSpanElement>) => e.detail === 2 && await window.maximize.toggle();

  return (
        <span
            ref={ref}
            onClick={handleClick}
        >
            {props.children}
        </span>
  );
};

export default WebkitAppRegion;
