import Image from "next/image";

function Header() {
    return (
        <div>
            {/* left */}
            <h1>
                <Image
                    src="https://avatars.githubusercontent.com/u/68492359?v=4"
                    alt="아바타"
                    width={100}
                    height={100}
                />
            </h1>

            {/* Center */}
            <div>검색</div>

            {/* Right */}
            <button>로그인</button>
        </div>
    );
}

export default Header;
