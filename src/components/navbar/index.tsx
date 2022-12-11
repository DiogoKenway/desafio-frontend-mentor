import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { gsap } from "gsap";
import logo from '../../assets/shared/logo.svg';
import closeIcon from '../../assets/shared/icon-close.svg';
import openIcon from '../../assets/shared/icon-hamburger.svg';

import {
    WrapperHeader,
    Logo,
    MenuMobile,
    NavigationBar,
    CloseIcon
}
    from './style';

const Navbar = ({ currentRoute }: { currentRoute: string }) => {

    const [showMenu, setShowMenu] = useState(true);


    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo("#logo", { y: 1500, opacity: 0 }, { y: 0, opacity: 1 }, 2);
        tl.fromTo("#line", { x: 1500, opacity: 0 }, { x: 0, opacity: 1 }, 2.1);
        tl.fromTo("#navbar", { y: -1500, opacity: 0 }, { y: 0, opacity: 1 }, 2.5);
        tl.fromTo("#menu-mobile", { y: -1500, opacity: 0 }, { y: 0, opacity: 1 }, 2.5);
    }, [])


    const getWidth = (): number => window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    function useCurrentWidth(): number {
        const [width, setWidth] = useState(getWidth());

        useEffect(() => {


            let timeoutId: any;

            const resizeListener = (): void => {

                clearTimeout(timeoutId);

                timeoutId = setTimeout(() => setWidth(getWidth()), 150);
            };

            window.addEventListener('resize', resizeListener);

            return () => {
                window.removeEventListener('resize', resizeListener);
            }

        }, [])

        return width;
    }

    const width: number = useCurrentWidth();


    return (
        <WrapperHeader>
            <Logo>
                <img id="logo" src={logo} alt="logo do site" />
                <hr id="line" />
            </Logo>
            <MenuMobile id="menu-mobile" onClick={() => setShowMenu(!showMenu)}
                style={showMenu || width > 450 ? { display: "none" } : { display: "initial" }}
            >
                <img src={openIcon}

                    alt="icone para abrir menu" />
            </MenuMobile>
            <NavigationBar onClick={() => setShowMenu(!showMenu)} id="navbar" style={showMenu || width > 450 ? { right: "0" } : { right: "-100vw" }}>
                <CloseIcon onClick={() => setShowMenu(!showMenu)}>
                    <img src={closeIcon}
                        alt="icone de fechar menu"
                    />
                </CloseIcon>
                <li>
                    <Link to="/home"
                        style={currentRoute === "home"
                            ? { borderBottom: "solid 2px #FFF" }
                            : { borderBottom: "solid 2px transparent" }}
                    ><strong>00</strong>home</Link>
                </li>
                <li>
                    <Link to="/destination"
                        style={currentRoute === "destination"
                            ? { borderBottom: "solid 2px white" }
                            : { borderBottom: "solid 2px transparent" }
                        }><strong>01</strong>destination</Link>
                </li>
                <li>
                    <Link to="/crew"
                        style={currentRoute === "crew"
                            ? { borderBottom: "solid 2px white" }
                            : { borderBottom: "solid 2px transparent" }
                        }><strong>02</strong>crew</Link>
                </li>
                <li>
                    <Link to="/technology"
                        style={currentRoute === "technology"
                            ? { borderBottom: "solid 2px white" }
                            : { borderBottom: "solid 2px transparent" }
                        }><strong>03</strong>technology</Link>
                </li>
            </NavigationBar>
        </WrapperHeader>
    )
}


export default Navbar;