import styled from 'styled-components';
import imgDesktop from '../../../assets/home/background-home-desktop.jpg';
import imgTablet from '../../../assets/home/background-home-tablet.jpg';
import imgMobile from '../../../assets/home/background-home-mobile.jpg';

const BgContent = styled.div`
    background: url(${imgDesktop}) center center no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    @media(max-width: 768px) {
        background: url(${imgTablet}) center center no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    @media(max-width: 450px) {
        background: url(${imgMobile}) center center no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
`

const WrapperHome = styled.section`
    width: 100vw;
    height: 75vh;
    gap: 4rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    // border: solid 3px #f1f2;
    padding-bottom: 3rem;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 95vh;
        width: 100vw;
    }

    @media(max-width: 450px) {
        width: 100vw;
        height: 88vh;
        justify-content: start;
        padding: 2rem 0;
        // border: solid 1px #f1f2aa;
    }
`

const InfoHome = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: end;
    align-items: center;
    color: #FFF;
    // border: solid 1px #f23;

    h2 {
        text-transform: uppercase;
        margin-bottom: 1rem;
        color: #D0D6F9;
        font-size: clamp(1.5vw, 2rem, 1.5rem);
        letter-spacing: 8px;
        text-align: center;
        font-weight: 200;
    }

    h1 {
        font-family: 'Bellefair', serif;
        font-size: clamp(9vw, 13rem, 8rem);
        font-weight: 400;
        line-height: 172px;
        text-transform: uppercase;
        letter-spacing: 0px;
    }

    p {
        font-family: Barlow;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 40px;
        letter-spacing: 0px;
        font-family: Barlow;
        color: #D0D6F9;
    }
    

    @media(max-width: 768px) {
        width: 100%;
        height: 45%;
        gap: 0;

        h1 {
            margin-bottom: .8rem; 
            font-family: Bellefair;
            font-size: 150px;
            font-weight: 400;
            line-height: 150px;
            letter-spacing: 0px;
            font-family: Bellefair;
        }

        p {

            font-family: Barlow;
            font-size: 1rem;
            line-height: 28px;
            letter-spacing: 0px;
            text-align: center;
            max-width: 415px;
        }
    }


    @media(max-width: 450px) {
        width: 100%;
        height: 70%;
        padding: 0 1rem;
        justify-content: start;
        align-items: center;
        gap: .5rem;

        h2 {
            letter-spacing: 4px;
            font-size: 1.5rem;
        }

        h1 {
            margin: 0rem;
            font-family: Bellefair;
            line-height: 100px;
            font-size: 5rem;
        }

        p {
            font-family: Barlow;
            font-size: 1rem;
            font-weight: 400;
            line-height: 25px;
            text-align: center;

        }
    }
`


const BtnExplore = styled.div`
    width: 17vw;
    height: 17vw;
    border-radius: 100%;
    background-color: #FFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(2vw, 1.6rem, 2.8rem);
    animation: pulse 1.5s infinite alternate;
    z-index: -1;

    @keyframes pulse {
        from {
            transform: scale(1);
            box-shadow: 0px 0px 0px #FFF;
        }

        to {
            transform: scale(1.20);
            box-shadow: 15px 15px 120px #FFF;
        }
    }

    a {
        display: block;
        color: #000;
        text-transform: uppercase;
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        line-height: 37px;
        letter-spacing: 3px;
        padding: 55px 35px;
    }

    @media(max-width: 768px) {
        width: 33vw;
        height: 33vw;
        margin-bottom: 10%;
    }

    @media(max-width: 450px) {
        width: 150px;
        height: 150px;
        margin-bottom: 15%;

        a {
            font-family: Bellefair;
            font-size: 20px;
            font-weight: 400;
            line-height: 23px;
            letter-spacing: 1.25px;
            text-align: center;

        }
    }
`
export { BgContent, WrapperHome, InfoHome, BtnExplore }