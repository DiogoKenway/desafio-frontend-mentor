import React, { useEffect } from 'react';

import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from '@glidejs/glide';

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
        const glide = new Glide('#glide', {
            type: 'slider',
            perView: 1

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
                                                            <PageTitle>
                                                                <h2><strong>01</strong> Pick your destination</h2>
                                                            </PageTitle>
                                                            <ContainerImg>
                                                                <img src={getImageByIndex<string>(index, imagesPlanets)} alt={item.name} />
                                                            </ContainerImg>
                                                        </HeaderPage>
                                                        <ContentSlider>
                                                            <HeaderSlider data-glide-el="controls[nav]">
                                                                <button data-glide-dir="=0">moon</button>
                                                                <button data-glide-dir="=1">mars</button>
                                                                <button data-glide-dir="=2">europa</button>
                                                                <button data-glide-dir="=3">titan</button>
                                                            </HeaderSlider>
                                                            <SliderTitle>
                                                                <h1>{item.name}</h1>
                                                                <p>{item.description}</p>
                                                                <hr />
                                                            </SliderTitle>
                                                            <InfoSlider>
                                                                <span>{item.distance}</span>
                                                                <span>{item.travel}</span>
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