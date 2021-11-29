import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

function Chat({ id }) {
    const [state, setState] = useState({ message: "", name: id });
    const [chat, setChat] = useState([]);

    useEffect(() => {
        socket.on("chat message", ({ name, message }) => {
            setChat([...chat, { name, message }]);
        });
    });

    const onChangeHandler = (e) => {
        setState({ ...state, message: e.target.value });
    };

    const onClickHandler = () => {
        const { name, message } = state;
        socket.emit("chat message", { name, message });
        setState({ message: "", name });
    };

    return (
        <div className="chat-wrap">
            <ul className="chat-box">
                {chat.map(({ name, message }, index) => (
                    <li className="chat-message" key={index}>
                        <div>{name}</div>
                        <div>{message}</div>
                    </li>
                ))}
            </ul>
            <div className="chat-handle-box">
                <input onChange={onChangeHandler}></input>
                <button onClick={onClickHandler}>send</button>
            </div>
        </div>
    );
}

export default Chat;
