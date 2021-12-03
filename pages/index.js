import { useState } from "react";

import Head from "next/head";
import Header from "../components/Header/Header";

import Sidebar from "../components/Sidebar/Sidebar";
import Board from "../components/Board/Board";
import Chat from "../components/Chat/Chat";

import Image from "next/image";
import styles from "../styles/index.module.css";

export default function Home() {
    const [isOpenChat, setIsOpenChat] = useState(false);
    const [isOpenZoom, setIsOpenZoom] = useState(false);

    return (
        <div className={styles.container}>
            <Head>
                <title>Work Station</title>
            </Head>

            <Header openChat={setIsOpenChat} openZoom={setIsOpenZoom} />

            <main className={styles.main}>
                {/* <Sidebar></Sidebar> */}
                <Sidebar />
                {/* Board */}
                <Board />
                {/* Zoom/Chat */}
                {isOpenChat && <Chat id="ham" />}
            </main>
        </div>
    );
}
