import React from "react";
import "../styles/SetupWrapper.css"

interface ISetupWrapper {
    children: React.ReactNode
}

export default function SetupWrapper({children} : ISetupWrapper) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: 'calc(100dvh - 64px)',
            width: 'calc(100dvw - 64px)',
            backgroundColor:'darkorange',
            color: "black",
            fontFamily: "Halloween Spooky",
            padding: '32px'}}>
            {children}
        </div>
    );
}