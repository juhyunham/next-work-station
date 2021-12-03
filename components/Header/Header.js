import Image from "next/image";
import { ChatIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon, VideoCameraIcon } from "@heroicons/react/outline";

import HeaderIcon from "./HeaderIcon";

import styles from "./Header.module.css";
import classnames from "classnames";

function Header({ openChat, openZoom }) {
    return (
        <div className={styles.header}>
            <h1 className={styles.logo}>
                <span>SW</span>
            </h1>

            <div className={styles.input_wrap}>
                <div className={styles.input_box}>
                    <input type="text" placeholder="검색해 주세요~" />
                    <SearchIcon
                        className={classnames(styles.search_icon, styles.icon)}
                    />
                </div>
            </div>

            <div className={styles.share_wrap}>
                <HeaderIcon Icon={ChatIcon} opener={openChat} />
                <HeaderIcon Icon={VideoCameraIcon} opener={openZoom} />
            </div>
        </div>
    );
}

export default Header;
