import "../Styles/NavLateral.css"
import Image from "next/image"
import logo from "../public/icons/spotify-logo-preto.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import  {fa-faHouse} from "@fortawesome/free-solid-svg-icons"
// import  {fa-faHouse} from "@fortawesome/fontawesome-svg-core"
import { FaHouse } from "react-icons/fa6";
import { BsSearch, BsCookie } from "react-icons/bs";

import { VscLibrary } from "react-icons/vsc";
import { FaGlobe } from "react-icons/fa";


export default function NavLateral() {
    return (
        <div className="sidebar">
            <nav className="sidebar-navigation">
                <div className="logo">
                    <a href="">
                        <Image src={logo} alt="logo" style={{width:70, height:25 }}/>
                    </a>
                </div>
                    <ul>
                        <li className="link-home">
                            <a href="" className="link-home">
                                <FaHouse />
                                <span>Início</span>
                            </a>
                        </li>
                        <li className="link-search"> 
                            <a href="" className="link-search">
                                <BsSearch />
                                <span>Busca</span>
                            </a>
                        </li>
                    </ul>  
            </nav>   
            <div className="library">
                <div className="library-content"> 
                    <button className="library-button">
                        <VscLibrary />
                        <span>Sua Biblioteca</span>
                    </button>
                </div>
                <section className="section-playlist">
                    <div className="section-playlist-content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist-button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>
                <div className="cookies">
                    <BsCookie />
                    <a href="">Cookies</a>
                </div>
                <div className="languages">
                    <button className="languages-button">
                        <FaGlobe />
                        <span>Portugês do Brasil</span>
                    </button>
                </div>
            </div>    
     </div>
    )
}