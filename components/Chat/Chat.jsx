import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import styles from "./Chat.module.css";

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
        <div className={styles.chat_wrap}>
            <div className={styles.chat_area}>
                <ul className={styles.chat_box}>
                    {chat.map(({ name, message }, index) => (
                        <li className={styles.chat_message} key={index}>
                            <div className={styles.chat_name}>{name}</div>
                            <div className={styles.chat_text}>{message}</div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.chat_handle_box}>
                <input onChange={onChangeHandler}></input>
                <button onClick={onClickHandler}>send</button>
            </div>
        </div>
    );
}

export default Chat;
