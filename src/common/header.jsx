"use client"
import React, {useState} from "react";
import style from '../styles/common/header/style.module.css'

import AnimatedCursor from "react-animated-cursor"

export default function Header(){
    
    const [menuOpen, setMenuOpen] = useState(false);
    const OpenCloseMenu = () =>{
        setMenuOpen(!menuOpen);
    }

    return(
        <>
        
            {/* NAVBAR CLOSED */}
            <div id={style.navigation_bar}>
                <div className={style.logo}>
                    <img src="/images/MacaLogoM_White.png" alt="logo" />
                </div>

                <div className={style.hamburger}>
                    <div className={style.menubar} onClick={OpenCloseMenu}>
                        <span className={style.first_span}></span>
                        <span className={style.second_span}></span>
                        <span className={style.third_span}></span>
                    </div>
                </div>
            </div>

            {/* NAVBAR OPENED */}
            <nav className={menuOpen ? `${style.nav} ${style.open}` : `${style.nav}`}>
                <AnimatedCursor 
                    innerSize={8}
                    outerSize={40}
                    innerScale={1}
                    outerScale={2}
                    outerAlpha={0}
                    hasBlendMode={true}
                    innerStyle={{
                    backgroundColor: 'var(--white)'
                    }}
                    outerStyle={{
                    border: '2px solid var(--white)'
                    }}
                />
                <div className={style.menuContainer}>
                    {/* NAVBAR HEADER */}
                    <div id={style.navigation_bar}>
                        <div className={style.logo}>
                            <img src="/images/MacaLogoM_White.png" alt="logo" />
                        </div>
                        <div className={style.hamburger}>
                            <div className={style.menubarOpend} onClick={OpenCloseMenu}>
                                <span className={style.close_first}></span>
                                <span className={style.close_second}></span>
                            </div>
                        </div>
                    </div>
                    {/* MENU ITEMS */}
                    <div className={style.menuItems}>
                        <div className={style.item}><a href="/" data-text="HOME">Home</a></div>
                        <div className={style.item}><a href="/about" data-text="ABOUT">About</a></div>
                        <div className={style.item}><a href="/blog" data-text="BLOG">blog</a></div>
                        <div className={style.item}><a href="/portfolio" data-text="PORTFOLIO">portfolio</a></div>
                        <div className={style.item}><a href="/contact" data-text="CONTACT">contact</a></div>
                    </div>

                </div>
            </nav>
        </>
    )
}