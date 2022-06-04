import React, { useEffect, useRef } from 'react';
import style from './style.module.less';

type WebkitAppRegionPropsType = {
  children?: React.ReactNode | React.ReactNode[]
};
const WebkitAppRegion: React.FC<WebkitAppRegionPropsType> = (props) => {
  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    ref.current.style.webkitAppRegion = 'drag';
  }, []);
  const handleClick = async (e: React.MouseEvent<HTMLSpanElement>) => e.detail === 2 && await window.maximize.toggle();

  return (
        <div
            ref={ref}
            className={style.main}
            onClick={handleClick}
        >
            {props.children || <></>}
        </div>
  );
};

export default WebkitAppRegion;
