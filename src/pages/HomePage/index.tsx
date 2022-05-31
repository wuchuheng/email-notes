import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import style from './style.module.less';
import WebkitAppRegion from '../../components/WebkitAppRegion';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginPage = () => {
    navigate('/login');
  };

  const [mode, setMode] = useState<'Light' | 'Dark'>('Light');
  const handleToggleDark = async () => {
    const isDarkMode = await window.darkMode.toggle();
    setMode(isDarkMode ? 'Dark' : 'Light');
  };
  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ref.current.style.webkitAppRegion = 'drag';
  }, []);

  return (<>
        <WebkitAppRegion>
            <div className={style.main}>
                hello
            </div>
        </WebkitAppRegion>
        <div
            className={style.dropBar}
            ref={ref}
        >
            <button onClick={handleLoginPage}> login </button>
        </div>
        home page
        <button id="toggle-dark-mode" onClick={handleToggleDark}>{mode}</button>
        <Button type='primary'>hello</Button>
    </>);
};

export default HomePage;
