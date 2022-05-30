import React, {useEffect, useRef, useState} from "react"
import {useNavigate} from "react-router-dom";
import './style.less';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginPage = () => {
        navigate("/login")
    }

    const handleToggleDark = async () => {
        const isDarkMode = await window.darkMode.toggle();

        setMode( isDarkMode ? 'Dark' : 'Light' )
    }
    const [mode, setMode] = useState<'Light' | 'Dark'>('Light')
    const ref = useRef<HTMLDivElement>();
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref.current.style.webkitAppRegion = 'drag';
    }, [])

    return (<>
        <div
            className='dropBar'
            ref={ref}
        >
            <button onClick={handleLoginPage}> login </button>
        </div>
        home page
        <button id="toggle-dark-mode" onClick={handleToggleDark}>{mode}</button>
    </>)

}

export default HomePage
