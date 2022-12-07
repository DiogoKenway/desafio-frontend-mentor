import styled from "styled-components";
import imgDesktop from '../../../assets/destination/background-destination-desktop.jpg';
import imgTablet from '../../../assets/destination/background-destination-tablet.jpg';
import imgMobile from '../../../assets/destination/background-destination-mobile.jpg';

const BgImage = styled.div`
    background: url(${imgDesktop}) center top no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100vw;
    height: 100vh;
    transition: all ease .5s;
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

const WrapperDestination = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    padding: 2rem 0;
    gap: 0rem;
    margin: 0 auto;
    // border: solid 1px #af22;

    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: start;
        align-items: center;
        width: 100%;
        height: 100%;
        gap: 3rem;
        padding: 2rem 0;
    }

    @media(max-width: 450px) {
        justify-content: start;
        padding: 1rem;
        gap: 3rem;
        width: 100%;
        height: 100%;
    }


`

const HeaderPage = styled.div`
    display:  flex;
    flex-direction:  column;
    // gap: 1rem;
    align-items: center;
    // border: solid 1px #aaff; 
    width: 100%;
    // height: 100%;
    text-align: center;
   

    @media(max-width: 768px) {
        justify-content: center;
        align-items: center;
        width: 70%;
        gap: 2rem;
        padding: 0;
    }

    @media(max-width: 450px) {
        justify-content: space-between;
        align-items: center;
        width: 70%;
        gap: 1.5rem;
        padding: 0;
    }
`
const PageTitle = styled.div`
    h2 {
        text-transform: uppercase;
        color: #D0D6F9;
        font-size: clamp(3vw, 3rem, 2rem);
        letter-spacing: 8px;
        font-weight: 200;
    }

    strong {
        color: white;
    }

    @media(max-width: 768px) {
        text-align: center;
    }

    @media(max-width: 450px) {
        
        h2 {
            font-size: 1.5rem;
        }
    }

`

const ContainerImg = styled.div`    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    // padding: 1rem;
    // border: solid 1px #af22ff;
    z-index: -1;
    margin-top: 3rem;

    img {
        width: 55%;
        // padding: 2rem;
        animation: rotate 30s infinite linear;
    }

    @media(max-width: 768px) {
        width: 100%;
        height: 100%;
        justify-content: center;
        margin-bottom: 2rem;
        align-items: flex-end;
        padding: 0;

        img {
            width: 60%;
        }
    }

    @media(max-width: 450px) {
        width: 80%;
        height: 5%;
        img {
            width: 100%;
        }
    }

    @keyframes rotate {
        from {
            tranform: rotate(0);
        }

        to {
            transform: rotate(360deg)
        }
    }
`


const HeaderSlider = styled.div`
    display: flex;
    gap: 1rem;

    button {
        display: block;
        background-color: transparent;
        text-transform: uppercase;
        letter-spacing: 7px;
        border: none;
        cursor: pointer;
        font-family: Barlow Condensed, sans-serif;
        font-weight: 300;
        font-size: clamp(1.2vw, 1.5rem, 1rem);
        color: rgba(255, 255, 255, .8);
        transition: all ease .5s;


        &:hover {
            border-bottom: 2px solid rgba(255, 255, 255, .3);
        }
    }

    @media(max-width: 768px) {
        justify-content: center;
        gap: .6rem;
    }

    @media(max-width: 450px) {
        gap: .6rem;
    }
`

const ContentSlider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 2rem;
    width: 70%;
    height: 100%;
    // border: 1px solid #ffaacc; 

    @media(max-width: 768px) {
        align-items: center;
        gap: 0rem;
        height: 30%;
    }

    @media(max-width: 450px) {
        width: 95%
    }
`

const SliderTitle = styled.div`

    h1 {
        font-family: Bellefair;
        font-size: 100px;
        font-weight: 400;
        line-height: 115px;
        letter-spacing: 0px;
        text-align: left;
        text-transform: uppercase;
        color: #FFF;
    }

    p {
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 32px;
        color: #D0D6F9;
        padding-bottom: 3rem;
        font-family: Barlow;
        letter-spacing: 0px;
        max-width: 480px;
    }

    hr {
        border: none;
        border-bottom: solid 1px #383B4B;
    }

    @media(max-width: 768px) {
        text-align: center;
        margin-bottom: 2rem;

        h1 {
            color: #FFF;
            font-size: 5rem;
            margin: 1rem 0;
            font-family: Bellefair;
            line-height: 92px;
            font-family: Bellefair;
            text-align: center;

        }

        p {
            letter-spacing: 0px;
            font-family: Barlow;
            font-size: 15px;
            line-height: 25px;

        }
    }

    @media(max-width: 450px) {
        width: 100%;
        height: 100%;

        h1 {
            font-family: Bellefair;
            font-size: 56px;
            font-weight: 400;
            line-height: 64px;
            letter-spacing: 0px;
            text-align: center;

        }

        p {
            padding-bottom: 2rem;
        }
    }

`

const InfoSlider = styled.div`
    display: flex;
    gap: 80px;
    color: #FFF;

    span {
        display: inline-block;         
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 1.9rem;
        line-height: 32px;
        text-transform: uppercase;
    }

    @media(max-width: 768px) {
        justify-content: space-around;

    }

    @media(max-width: 450px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;
    }

`

export {
    BgImage,
    Container,
    WrapperDestination,
    HeaderPage,
    PageTitle,
    ContainerImg,
    HeaderSlider,
    ContentSlider,
    InfoSlider,
    SliderTitle
};