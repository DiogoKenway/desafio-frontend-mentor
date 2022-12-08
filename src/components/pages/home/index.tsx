import { gsap } from "gsap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
    BgContent,
    WrapperHome,
    InfoHome,
    BtnExplore
} from "./style";


const Home = () => {

    useEffect(() => {

        const tl = gsap.timeline();
    
        tl.fromTo("#bg", { width: "0%", opacity: 0 }, { opacity: 1, width: "100%" }, ">=2");
        tl.fromTo("#subtitle", {x: 1500, opacity: 0}, {x: 0, opacity: 1}, 3);
        tl.fromTo("#title", {x: -1500, opacity: 0}, {x: 0, opacity: 1}, 3.2);
        tl.fromTo("#text", {x: 1500, opacity: 0}, {x: 0, opacity: 1}, 3.4);
        tl.fromTo("#btn", {opacity: 0 }, {opacity: 1, ease : "strong.inOut" }, 3.6)  
        
    }, [])


    return (
        <>
            <BgContent id="bg" />
            <WrapperHome >
                <InfoHome >
                    <h2 id="subtitle">so, you want to travel to</h2>
                    <h1 id="title">space</h1>
                    <p id="text">Let’s face it; if you want to go to space, you might as well
                        genuinely go to outer space and not hover kind of on the
                        edge of it. Well sit back, and relax because we’ll give you a
                        truly out of this world experience!
                    </p>
                </InfoHome>
                    <BtnExplore id="btn">
                        <Link to="/destination">
                            explore
                        </Link>
                    </BtnExplore>
            </WrapperHome>

        </>
    )
}

export default Home;