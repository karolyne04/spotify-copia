import search from "../public/icons/search.png";
import left from "../public/icons/small-left.png"
import right from  "../public/icons/small-right.png"
import "../Styles/Nav.css";
import Image from "next/image";

export default function Nav() {
    return (
         <div className="main-navigation">
            <nav className="header-navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <Image src={left} alt=">"  />
                    </button>
                    <button className="arrow-right">
                        <Image src={right} alt="<"/>
                    </button>
                    <div className="header-search">
                        <Image  src={search} alt="s" style={{}} />
                        <input className="name" type="text" id="search-input" placeholder="O que vocẽ quer ouvir" />
                    </div>
                    <div className="header-login">
                        <button className="subscribe">Inscreva-se</button>
                        <button className="login">Entrar</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
