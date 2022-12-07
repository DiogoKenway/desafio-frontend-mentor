import styled from "styled-components";
import imgDesktop from '../../../assets/crew/background-crew-desktop.jpg';
import imgTablet from '../../../assets/crew/background-crew-tablet.jpg';
import imgMobile from '../../../assets/crew/background-crew-mobile.jpg';


const BgImage = styled.div`
    background: url(${imgDesktop}) center top no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color: #0A0C18;
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

const GlideWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    margin: auto;
    
    // border: solid 1px #c030c3;

    @media(max-width: 768px) {

        // display: flex;
        // align-items: center;
        // justify-content: center;
    }

    @media(max-width: 450px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }
`

const Container = styled.div`
    width: 80%;
    height: 89%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin: auto;
    // border: solid 1px #c1c1c1;   

    @media(max-width: 768px) {
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        // border: solid 3px #c1c1c1;   
    }

    @media(max-width: 450px) {
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80%;
        gap: 0;
        position: relative;
    }
`

const SectionInfo = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;
    height: 100%;
    gap: 5rem;
    // border: solid 2px #444556;
    color: #FFF;

    @media(max-width: 768px) {
        align-items: center;
        justify-content: start;
        width: 100%;
        height: 100%;
        gap: 3rem;
    }

    @media(max-width: 450px) {
        align-items: center;
        justify-content: start;
        width: 100%;
        height: 100%;
        gap: 0;
    }
`

const PageTitle = styled.div`

    h2 {
        text-transform: uppercase;
        color: #D0D6F9;
        font-size: clamp(3vw, 3rem, 2rem);
        letter-spacing: 8px;
        text-align: start;
        font-weight: 200;
        margin-bottom: 2rem; 

        strong {
            margin-right: 1rem;
            color: #FFF;
        }
    }

    @media(max-width: 450px) {
        position: absolute;
        top: -8%;

        h2 {
            font-size: 1.5rem;
        }
    }

`

const RoleInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 40%;
    width: 40%;
    gap: 3rem;

    h3 {
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: clamp(2.5vw, 3rem, 1.5rem);
        line-height: 37px;
        opacity: .5;
        text-transform: uppercase;
    }
    
    h1 {
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: clamp(4vw, 3rem, 2.3rem);
        line-height: 64px;
        text-transform: uppercase;
        
    }

    p {
        font-family: 'Barlow';
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #D0D6F9;
        white-space: normal;
        font-family: Barlow;
    }

    @media(max-width: 768px) {
        gap: 1rem;
        align-items: center;
        text-align: center;
        justify-content: center;
        // border: solid 1px #99bb20;
        padding: 1rem;
        width: 75%;

        h3 {
            font-size: 1.5rem;
        }
        
        h1 {
            font-size: 40px;
            line-height: 46px;
            letter-spacing: 0px;
        }
        
        p {            
            font-size: 1rem;
            line-height: 28px;
            letter-spacing: 0px;
            font-family: Barlow;
            font-size: 16px;
            font-weight: 400;   

        }

    }

    @media(max-width: 450px) {
        // border: solid 2px #99bb20;
        height: 50%;
        width: 75%;
        gap: 0;
        padding: 3rem 1rem;
        justify-content: center;

        p {
            font-size: 15px;
            line-height: 25px;
        }

        h3 {
            font-size: 1rem;
        }

        h1 {
            font-size: 24px;
            font-weight: 400;
            line-height: 28px;
            margin-bottom: 1rem;
        }
    }
`

const NavigationPoints = styled.div`
    width: 200px;
    display: flex;
    gap: 1.25rem;
    // border: solid 1px #123221;

    @media(max-width: 768px) {
        width: 100px;
        align-items: center;
    }

    @media(max-width: 450px) {
        order: -1;
        margin: 2rem 0;
    }
`

const Dot = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: #363841;
    cursor: pointer;

    @media(max-width: 768px) {
        width: 10px;
        height: 10px;
    }
`


const SectionPhoto = styled.section`
    transform: translateX(-300px);
    img {
        width: 135%;
    }

    @media(max-width: 768px) {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        // border: solid 1px #098;
        transform: translate(0px, -100px);

        img {
            width: 70%;
        }
    }

    @media(max-width: 450px) {
        order: -1;
        transform: translate(0, 40px);
        border-bottom: solid 1px #383B4B;
        width: 90%;

        img {
            width: 55%;
        }
    }
`

export {
    BgImage,
    GlideWrapper,
    Container,
    SectionInfo,
    PageTitle,
    RoleInformation,
    NavigationPoints,
    Dot,
    SectionPhoto
};