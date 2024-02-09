import "../Styles/Main.css"
import Image from "next/image"
import play1 from "../public/playlist/1.jpeg"
import play2 from "../public/playlist/2.png"
import play3 from "../public/playlist/3.jpeg"
import play4 from "../public/playlist/4.jpeg"
import play5 from "../public/playlist/5.jpeg"
import play6 from "../public/playlist/6.jpeg"
import play7 from "../public/playlist/7.jpeg"
import play8 from "../public/playlist/8.jpeg"
import play9 from "../public/playlist/9.jpeg"
import play10 from "../public/playlist/10.jpeg"
import play11 from "../public/playlist/11.jpeg"
import play12 from "../public/playlist/12.jpeg"
import play13 from "../public/playlist/13.jpeg"
import play14 from "../public/playlist/14.jpeg"
import play15 from "../public/playlist/15.jpeg"
export default function Main() {
    
    return (
        <main className="main-container">
                    <div className="playlist-container">
                                <div id="result-playlists">
                                    <div className="playlist">
                                        <h1 id="greeting">Boas vindas</h1>
                                        <h2 className="session">Navegar por todas as seções</h2>
                                    </div>
                                    
                                    <div className="offer__scroll-container">
                                        <div className="offer__list">
                                            <section className="offer__list-item">
                                                
                                                <a href="" className="cards">
                                                <div className="cards card1">
                                                    <Image src={play1} alt="" />
                                                    <span>Boas festas</span>
                                                </div>
                                            </a>
                                            
                                            <a href="" className="cards">
                                                <div className="cards card2">
                                                     <Image src={play2} alt="" />
                                                    <span>Feitos para você</span>
                                                </div>
                                            </a>
                                            
                                
                                            <a href="" className="cards">
                                                <div className="cards card3">
                                                    <Image src={play3} alt="" />
                                                    <span>Lançamentos</span>
                                                </div>
                                            </a>
                                            
                                            <a href="" className="cards">
                                                <div className="cards card4">
                                                  <Image src={play4} alt="" />
                                                    <span>Creators</span>
                                                </div>
                                            </a>
                                            
                                            <a href="" className="cards">
                                                <div className="cards card5">
                                                    <Image src={play5} alt="" />
                                                    <span>Para treinar</span>
                                                </div>
                                            </a>
                                            
                                            <a href="" className="cards">
                                                <div className="cards card6">
                                                <Image src={play6} alt="" />
                                                    <span>Podcasts</span>
                                                </div>
                                            </a>
                                            
                                            <a href="" className="cards">
                                                <div className="cards card7">
                                                    <Image src={play7} alt="" />
                                                    <span>Sertanejo</span>
                                                </div>
                                            </a>
                                            
                                            <a href="" className="cards">
                                                <div className="cards card8">
                                                    <Image src={play8} alt="" />
                                                    <span>Samba e pagode</span>
                                                </div>
                                            </a>
                                            
                                    
                                            <a href="" className="cards">
                                                <div className="cards card9">
                                                    <Image src={play9} alt="" />
                                                    <span>Funk</span>
                                                </div>
                                            </a>
                                            
                                            <a href="" className="cards">
                                                <div className="cards card10">
                                                    <Image src={play10} alt="" />
                                                    <span>MPB</span>
                                                </div>
                                            </a>
                                            
                                            <a href="" className="cards">
                                                <div className="cards card11">
                                                    <Image src={play11} alt="" />
                                                    <span>Rock</span>
                                                </div>
                                            </a>
                                            
                                        
                                            <a href="" className="cards">
                                                <div className="cards card12">
                                                    <Image src={play12} alt="" />
                                                    <span>Hip Hop</span>
                                                </div>
                                            </a>
            
                
                                            <a href="" className="cards">
                                                <div className="cards card13">
                                                    <Image src={play13} alt="" />
                                                    <span>Indie</span>
                                                </div>
                                            </a>
                                            
                                            <a href="" className="cards">
                                                <div className="cards card14">
                                                    <Image src={play14} alt="" />
                                                    <span>Relax</span>
                                                </div>
                                            </a>
                                            
            
                                            <a href="" className="cards">
                                                <div className="cards card15">
                                                    <Image src={play15} alt="" />
                                                    <span>Música Latina</span>
                                                </div>
                                            </a>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div id="result-artist" className="hidden">
                                <div className="grid-container">
                                    <div className="artist-card" id="">
                                        <div className="card-img">
                                            {/* <img id="artist-img" className="artist-img" /> */}
                                            <div className="play">
                                                <span className="fa fa-solid fa-play"></span>
                                            </div>
                                        </div>
                                        <div className="card-text">
                                            <a title="Foo Fighters" className="vst" href=""></a>
                                                <span className="artist-name" id="artist-name"></span>
                                                <span className="artist-categorie">Artista</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                    
        </main>
    )
}