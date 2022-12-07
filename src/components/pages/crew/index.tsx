import React, { useEffect } from "react";

import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from "@glidejs/glide";

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

const Crew = (props: any) => {

    useEffect(() => {
        const glide = new Glide("#glide", {
            type: 'slider',
            perView: 1
        })

        glide.mount();
    }, [])


    return (
        <>
            <BgImage /> {
                crew ? (
                    <div id="glide">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                {crew.map((item, index) => (
                                    <li key={index}>
                                        <GlideWrapper>
                                            <Container>
                                                <SectionInfo>
                                                    <PageTitle>
                                                        <h2><strong>02</strong>meet your crew</h2>
                                                    </PageTitle>
                                                    <RoleInformation>
                                                        <h3>{item.role}</h3>
                                                        <h1>{item.name}</h1>
                                                        <p>{item.bio}</p>
                                                    </RoleInformation>
                                                    <NavigationPoints data-glide-el="controls[nav]">
                                                        <Dot data-glide-dir="=0" />
                                                        <Dot data-glide-dir="=1" />
                                                        <Dot data-glide-dir="=2" />
                                                        <Dot data-glide-dir="=3" />
                                                    </NavigationPoints>
                                                </SectionInfo>
                                                <SectionPhoto>
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