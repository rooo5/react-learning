import React from "react";
import { useState, useEffect } from "react";

const Text = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        console.log("mounted")

        return () => {
            console.log("Unmounted")
        }
    }, [])

    return (
        <div>
            <input id="input-feild" onChange={(evt) => {
                setText(evt.target.value);
            }}></input>
            <p>{text}</p>
        </div>
    )
}

export default Text;