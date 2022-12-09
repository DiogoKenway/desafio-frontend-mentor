import React, { useEffect, useState } from "react";
import gsap from "gsap";

import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from "@glidejs/glide";

import { technology } from '../../../service/data.json';
import {
    getImageByIndex,
    imagesRocketsDesktop,
    RocketsSmallerDevices
} from "../../../utils/GetIndexImages";

import {
    BgImage,
    WrapperTecnology,
    Container,
    PageTitle,
    NavigationPoints,
    Informations,
    ContainerImage
} from "./style";

const Technology = () => {

    const [showMenu, setShowMenu] = useState(true);

    useEffect(() => {
        const glide = new Glide("#glide", {
            type: 'slider',
            perView: 1,
            gap: 1500
        })

        glide.mount();

    }, [])

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo("#bg", { opacity: 0 }, { opacity: 1 , duration: 3 }, 1);
        tl.fromTo("#title-tech", { opacity: 0, x: "-1200px" }, { opacity: 1, x: "0px"}, 1.2);
        tl.fromTo("#dots-tech", { opacity: 0, y: "1500px" }, { opacity: 1, y: "0px" }, 1.4);
        tl.fromTo("#name-tech", { y: "-1000px" }, { y: "0px"}, 1.5);
        tl.fromTo("#info-tech", { y: "1000px" }, { y: "0px"}, 1.7);
        tl.fromTo("#img-tech", { opacity: 0 }, { opacity: 1, delay: .2 }, 2);

    }, []);

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
        <>
            <BgImage id="bg" />
            {
                technology ? (
                    <div id="glide">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                {technology.map((item, index) =>
                                    <li key={index}>
                                        <WrapperTecnology>
                                            <Container>
                                                <PageTitle id="title-tech">
                                                    <h2><strong>03</strong> Space launch 101</h2>
                                                </PageTitle>
                                                <NavigationPoints id="dots-tech" data-glide-el="controls[nav]">
                                                    <span data-glide-dir="=0">1</span>
                                                    <span data-glide-dir="=1">2</span>
                                                    <span data-glide-dir="=2">3</span>
                                                </NavigationPoints>
                                                <Informations>
                                                    <h1 id="name-tech">{item.name}</h1>
                                                    <p id="info-tech">{item.description}</p>
                                                </Informations>
                                                <ContainerImage id="img-tech">
                                                    <img src={ width <= 768
                                                        ? getImageByIndex<string>(index, RocketsSmallerDevices)
                                                        : getImageByIndex<string>(index, imagesRocketsDesktop)} alt={item.name} />
                                                </ContainerImage>
                                            </Container>
                                        </WrapperTecnology>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>) : (<h1>CARREGANDO DADOS....</h1>)
            }


        </>
    )
}

export default Technology;