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


type Routes = {
    currentRoute: string;
}

const Navbar = ({ currentRoute }: Routes) => {
    
    const [showMenu, setShowMenu] = useState(true);

    const getWidth = () :number => window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    function useCurrentWidth() :number {
        const [width, setWidth] = useState(getWidth());

        useEffect(() => {
            const tl = gsap.timeline();
            
            tl.fromTo("#logo", {y: 1500, opacity: 0}, {y: 0, opacity: 1}, 3)
            tl.fromTo("#line", {x: 1500, opacity: 0}, {x: 0, opacity: 1}, 3.1)
            tl.fromTo("#navbar", {y: -1500, opacity: 0}, {y: 0, opacity: 1}, 3.5)
       
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
                <hr id="line"/>
            </Logo>
            <MenuMobile 
                style={showMenu || width > 450 ? { display: "none" } : { display: "initial" }}
               >
                <img src={openIcon}
                    onClick={() => setShowMenu(!showMenu)}
                    alt="icone para abrir menu" />
            </MenuMobile>
            <NavigationBar id="navbar" style={showMenu || width > 450 ? { right: "0" } : { right: "-100vw" }}>
                <CloseIcon>
                    <img src={closeIcon}
                        alt="icone de fechar menu"
                        onClick={() => setShowMenu(!showMenu)} />
                </CloseIcon>
                <li>
                    <Link to=""
                        style={ currentRoute === ""
                         ? { borderBottom: "solid 2px #FFF"}
                         : { borderBottom: "solid 2px transparent" } }
                        ><strong>0 0</strong>&nbsp; H O M E</Link>
                </li>
                <li>
                    <Link to="/destination"
                        style={currentRoute === "destination"
                            ? { borderBottom: "solid 2px white" }
                            : { borderBottom: "solid 2px transparent" }
                        }><strong>0 1</strong>&nbsp; D E S T I N A T I O N</Link>
                </li>
                <li>
                    <Link to="/crew"
                        style={currentRoute === "crew"
                            ? { borderBottom: "solid 2px white" }
                            : { borderBottom: "solid 2px transparent" }
                        }><strong>0 2</strong>&nbsp; C R E W</Link>
                </li>
                <li>
                    <Link to="/technology"
                        style={currentRoute === "technology"
                            ? { borderBottom: "solid 2px white" }
                            : { borderBottom: "solid 2px transparent" }
                        }><strong>0 3</strong>&nbsp; T E C H N O L O G Y</Link>
                </li>
            </NavigationBar>
        </WrapperHeader>
    )
}


export default Navbar;