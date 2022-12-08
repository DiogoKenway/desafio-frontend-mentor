import React, { useEffect } from 'react';

import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from '@glidejs/glide';

import { gsap } from "gsap";

import { getImageByIndex, imagesPlanets } from '../../../utils/GetIndexImages';

import { destinations } from '../../../service/data.json';

import {
    BgImage,
    WrapperDestination,
    Container,
    HeaderPage,
    PageTitle,
    ContainerImg,
    HeaderSlider,
    ContentSlider,
    InfoSlider,
    SliderTitle
} from "./sytle";


const Destination = () => {

    useEffect(() => {
        const tl = gsap.timeline();
            
            tl.fromTo("#planet-img", {width: "1000%"}, {width: "100%", delay: .7 }, 1.2);
            tl.fromTo("#title", {y: "-1000px" }, { y: "0"} , 2.1);
            tl.fromTo("#planet-list", {y: "-1500px", opacity: 0}, {y: "0px", opacity: 1}, 2.3);
            tl.fromTo("#planet-name", {x: 1500, opacity: 0}, {x: 0, opacity: 1}, 2);
            tl.fromTo("#description", {x: 1500, opacity: 0}, {x: 0, opacity: 1}, 2.1);
            tl.fromTo("#line-info", {y: 1500, opacity: 0}, {y: 0, opacity: 1}, 2.2);
            tl.fromTo("#distance", {y: 1500, opacity: 0}, {y: 0, opacity: 1}, 2.3);
            tl.fromTo("#travel", {x: -1500, opacity: 0}, {x: 0, opacity: 1}, 2.3);
    }, []);

    useEffect(() => {
        const glide = new Glide('#glide', {
            type: 'slider',
            perView: 1,
            gap: 2500

        })

        glide.mount()
    }, []);

    return (
        <>
            <BgImage />
            <div className="destination wrapper">
                {
                    destinations ? (
                        <div id='glide'>
                            <div className="glide__track" data-glide-el="track">
                                <ul className="glide__slides">
                                    {

                                        destinations.map((item, index) => (
                                            <li className="glide__slide" key={index}>
                                                <WrapperDestination>
                                                    <Container> 
                                                        <HeaderPage>
                                                            <PageTitle id="title">
                                                                <h2><strong>01</strong> Pick your destination</h2>
                                                            </PageTitle>
                                                            <ContainerImg id="planet-img">
                                                                <img src={getImageByIndex<string>(index, imagesPlanets)} alt={item.name} />
                                                            </ContainerImg>
                                                        </HeaderPage>
                                                        <ContentSlider>
                                                            <HeaderSlider id="planet-list" data-glide-el="controls[nav]">
                                                                <button data-glide-dir="=0">moon</button>
                                                                <button data-glide-dir="=1">mars</button>
                                                                <button data-glide-dir="=2">europa</button>
                                                                <button data-glide-dir="=3">titan</button>
                                                            </HeaderSlider>
                                                            <SliderTitle>
                                                                <h1 id="planet-name">{item.name}</h1>
                                                                <p id="description">{item.description}</p>
                                                                <hr id="line-info" />
                                                            </SliderTitle>
                                                            <InfoSlider>
                                                                <span id="distance">{item.distance}</span>
                                                                <span id="travel">{item.travel}</span>
                                                            </InfoSlider>
                                                        </ContentSlider>
                                                    </Container>

                                                </WrapperDestination>
                                            </li>
                                        ))

                                    }
                                </ul>
                            </div>
                        </div>
                    ) : (<h1>CARREGANDO...</h1>)
                }
            </div>
        </>
    )
}

export default Destination;