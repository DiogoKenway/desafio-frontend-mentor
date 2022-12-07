import styled from 'styled-components';

const WrapperHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 40px 0 0 40px;

    @media(max-width: 768px) {
        padding: 0;
    }

    @media(max-width: 450px) {
        padding-right: 2rem;
    }
`

const Logo = styled.div`
    width: 50%;
    position: relative;

    img {
        width: 8%;
    }

    hr {
        width: 89%;
        position: absolute;
        top: 60%;
        right: -4%;
        border: none;
        border-bottom: 1px solid #80808080;
        z-index: 5;
    }

    @media (max-width: 768px) {
        width: 25%;
        margin-left: 2rem;

        img {
            width: 25%;
        }

        hr {
            display: none;
        }
    }

    @media (max-width: 450px) {
        margin-top: 1.5rem;

        img {
            width: 12vw;
        }
    }
`

const MenuMobile = styled.div`
    display: none;   
    
    @media (max-width: 768px) {
        display: none;
    }

    @media (max-width: 450px) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 1.5rem;
        z-index: 6;
        cursor: pointer;
    }
`


const NavigationBar = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 65%;
    background-color: #806d6d33;
    backdrop-filter: blur(15px);
    
    position: relative;

    li a {
        display: block;
        margin: 0 1rem;
        padding: 2rem 0;
        border-bottom: solid 2px transparent;
        font-size: clamp(1.1vw, 2rem, .75rem);

        strong {
            color: white;
        }

        &:hover {
            border-bottom: 2px solid #FFF;
        }
    }

    @media(max-width: 768px) {
        width: 60%;
        padding: .5rem;
        li a {
            font-size: 2.2vw;
            margin: 0;

            strong {
                display: none;
            }
        }
        
    }

    @media (max-width: 450px) {
        width: 60%;
        position: fixed;
        min-height: 100vh;
        top: 0;
        right: 0;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 5rem;
        margin: 0;
        z-index: 5;
        transition: all .5s ease;
        backdrop-filter: blur(25px);

        li {
            display: block;
            width: 100%;

            a {
                display: inline-block;
                width: 90%;
                font-size: 4vw;
                padding: 1rem;
                border-bottom: none !important;
                // border-right: 2px solid #FFF;

                strong {
                    display: inline-block;
                    padding-right: .5rem;

                }

                &:hover {
                    border-bottom: none;
                }
            }
        }
    }
    
`

const CloseIcon = styled.div`
    display: none;

    @media (max-width: 450px) {
        display: block;
        position: relative;
        cursor: pointer;
        padding: .5rem;
        position: absolute;
        top: 3%;
        right: 8%;
    }
`

export {
    WrapperHeader,
    Logo,
    MenuMobile,
    NavigationBar,
    CloseIcon
};