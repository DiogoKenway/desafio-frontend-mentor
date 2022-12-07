import styled from "styled-components";
import imgDesktop from '../../../assets/technology/background-technology-desktop.jpg';
import imgTablet from '../../../assets/technology/background-technology-tablet.jpg';
import imgMobile from '../../../assets/technology/background-technology-mobile.jpg';

const BgImage = styled.div`
    background: url(${imgDesktop}) center no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100vw;
    height: 100vh;
    transition: all ease .5s;
    background-color: #0B0D19;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    @media(max-width: 768px) {
        background: url(${imgTablet}) center top no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    @media(max-width: 450px) {
        background: url(${imgMobile}) center top no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
`

const WrapperTecnology = styled.main`
    width: 100vw;
    height: 100vh;
    
`

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 90%;
    gap: 4rem;
    // border: solid 1px #882221;
    margin: 0 auto;
    position: relative;

    @media(max-width: 768px) {
        justify-content: center;
        width: 100vw;
        flex-direction: column;
        padding: 1rem 0;
        gap: 2rem;
    }
`

const PageTitle = styled.div`
    position: absolute;
    top: 12%;
    left: 8%;

    h2 {
        text-transform: uppercase;
        margin-bottom: 1rem;
        color: #D0D6F9;
        font-size: clamp(3vw,3rem,2rem);
        letter-spacing: 8px;
        font-weight: 200;
        
        strong {
            color: #FFF;
        }
    }

    @media(max-width: 768px) {
        position: static;
        order: -2;
    }

    @media(max-width: 450px) {
        

        h2 {
            font-size: 1.5rem;  
        }
    }
`

const NavigationPoints = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    width: 40%;
    justify-self: center;
    // border: solid 1px #112221;


    span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        width: 100px;
        border-radius: 100%;
        cursor: pointer;
        font-family: Bellefair;
        font-size: 2rem;
        font-weight: 400;
        line-height: 37px;
        letter-spacing: 2px;
        color: #FFF;
        border: solid 1px #FFF;
    }

    @media(max-width: 768px) {
        flex-direction: row;
        width: 100%;
        justify-content: center;
        margin-bottom: 2rem;
        gap: 1rem;

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            width: 60px;
            font-size: 1.25rem;
            line-height: 28px;
            letter-spacing: 1.5px;
        }
    }

    @media(max-width: 450px) {
        
        span {
            height: 40px;
            width: 40px;
            font-size: 1rem;
        }
    }
`

const Informations = styled.div`
    display: flex;
    flex-direction: column;
    // border: solid #225577;
    gap: 1rem;
    width: 50%;

    h1 {
        font-family: Bellefair;
        font-size: 3.5rem;
        font-weight: 400;
        line-height: 4rem;
        letter-spacing: 0px;
        text-transform: uppercase;
        color: #FFF;
    }

    p {
        white-space: normal;
        font-family: Barlow;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0px;
        color: #D0D6F9;
        
    }

    @media(max-width: 768px) {
        width: 55%;
        align-items: center;

        h1 {
            font-family: Bellefair;
            font-size: 2.5rem;
            font-weight: 400;
            line-height: 46px;
            letter-spacing: 0px;
            text-align: center;
        }

        p {
            font-family: Barlow;
            font-size: 1rem;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0px;
            font-family: Barlow;
            text-align: center;
     
        }
    }

    @media(max-width: 450px) {
        width: 90%;
        padding: 0 1.5rem;

        h1 {
            font-size: 24px;
            font-weight: 400;
            line-height: 28px;
        }
        
        p {
            font-size: 15px;
            line-height: 25px;
        }
    }
`

const ContainerImage = styled.section`
    width: 100%;
    // border: solid 1px #551121;

    img {
        width: 101%;
    }

    @media(max-width: 768px) {
        order: -1;
    }

`

export { BgImage,
    WrapperTecnology,
    Container,
    PageTitle,
    NavigationPoints,
    Informations,
    ContainerImage
};
