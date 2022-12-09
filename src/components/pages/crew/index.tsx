import React, { useEffect } from "react";

import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from "@glidejs/glide";

import { gsap } from "gsap";

import { crew } from '../../../service/data.json';

import { imagesEmployees, getImageByIndex } from '../../../utils/GetIndexImages';

import {
    BgImage,
    GlideWrapper,
    Container,
    SectionInfo,
    PageTitle,
    RoleInformation,
    NavigationPoints,
    SectionPhoto,
    Dot
} from "./style";

const Crew = () => {

    useEffect(() => {

        const tl = gsap.timeline();

        // tl.fromTo("#bg-crew", {height: "0%"}, {height: "100%", delay: .6 }, 1.3);
        // tl.fromTo("#img-crew", {y: "1000px"}, {y: "0px", delay: .2 }, 2);
        // tl.fromTo("#title-crew", {opacity: 0, y: "-1500px"}, { opacity: 1, y: "0px"} , 1.9);
        // tl.fromTo("#role", {x: "-1500px", opacity: 0}, {x: "0px", opacity: 1}, 2.2);
        // tl.fromTo("#name-crew", {x: 1500, opacity: 0}, {x: 0, opacity: 1}, 2.3);
        // tl.fromTo("#bio", {x: -1500, opacity: 0}, {x: 0, opacity: 1}, 2.3);
        // tl.fromTo("#dots", { x: -1500, opacity: 0}, {x: 0, opacity: 1}, 2.3);

    }, [])


    useEffect(() => {
        const glide = new Glide("#glide", {
            type: 'slider',
            perView: 1,
            gap: 1000
        })

        glide.mount();
    }, [])


    return (
        <>
            <BgImage id="bg-crew" /> {
                crew ? (
                    <div id="glide">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                {crew.map((item, index) => (
                                    <li key={index}>
                                        <GlideWrapper>
                                            <Container>
                                                <SectionInfo>
                                                    <PageTitle id="title-crew">
                                                        <h2><strong>02</strong>meet your crew</h2>
                                                    </PageTitle>
                                                    <RoleInformation>
                                                        <h3 id="role">{item.role}</h3>
                                                        <h1 id="name-crew">{item.name}</h1>
                                                        <p id="bio">{item.bio}</p>
                                                    </RoleInformation>
                                                    <NavigationPoints id="dots" data-glide-el="controls[nav]">
                                                        <Dot data-glide-dir="=0" />
                                                        <Dot data-glide-dir="=1" />
                                                        <Dot data-glide-dir="=2" />
                                                        <Dot data-glide-dir="=3" />
                                                    </NavigationPoints>
                                                </SectionInfo>
                                                <SectionPhoto  id="img-crew" >
                                                    <img src={getImageByIndex<string>(index, imagesEmployees)} alt={item.name} />
                                                </SectionPhoto>
                                            </Container>
                                        </GlideWrapper>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                ) : <h1>CARREGANDO....</h1>
            }

        </>

    )
}

export default Crew;