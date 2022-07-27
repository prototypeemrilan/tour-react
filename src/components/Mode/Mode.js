import React from 'react';




export  default function Mode({mode, changeMode}) {
    let ChangeModeText = mode.current === "day" ? "Ночной режим" : "Дневной режим"
    const buttonHandler = () => {
        const newValue = mode.current === "day" ? "night": "day"
        changeMode({current: newValue})
    }
    const style = {
        day: {
            color: "black",
            backgroundColor: "white",
            padding: "10px"
        },
        night: {
            color: "white",
            backgroundColor: "black",
            border: "2px solid white",
            padding: "10x"
        }
    }
    const newColor = mode.current === "day" ? style.day : style.night
    return (
        <div style={newColor}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <button onClick={buttonHandler} style={newColor} className="button">{ChangeModeText}</button>

        </div>
    )
}