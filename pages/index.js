import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../components/Header";
import Chat from "../components/Chat/Chat";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Work Station</title>
            </Head>

            <Header />

            <main>
                {/* <Sidebar></Sidebar> */}
                {/* Board */}
                {/* Zoom/Chat */}
                <Chat id="ham"/>
            </main>
        </div>
    );
}
