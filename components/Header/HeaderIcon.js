import styles from "./Header.module.css";

function HeaderIcon({ Icon, opener }) {
    const handlerOpener = () => {
        alert("채팅/줌창 오픈");
        opener(true);
    };

    return <Icon className={styles.icon} onClick={handlerOpener} />;
}

export default HeaderIcon;
