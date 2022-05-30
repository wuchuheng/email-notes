import React, {useEffect, useRef} from "react";

type WebkitAppRegionPropsType = {
    children: React.ReactNode | React.ReactNode[]
}
const WebkitAppRegion: React.FC<WebkitAppRegionPropsType> = props => {
    const ref = useRef<HTMLSpanElement>()
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref.current.style.webkitAppRegion = 'drag';
    }, [])
    const handleClick = async (e: React.MouseEvent<HTMLSpanElement>) => {
        switch (e.detail) {
            case 2:
                await window.maximize.toggle()
                break;
        }
    };

    return (
        <span
            ref={ref}
            onClick={handleClick}
        >
            {props.children}
        </span>
    )
}

export default WebkitAppRegion
