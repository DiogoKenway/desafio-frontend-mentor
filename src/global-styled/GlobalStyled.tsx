import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all ease .5s;
    }
    
    body {
        width: 100vw;
        height: 100vh;
        font-family: 'Barlow Condensed', sans-serif;
        overflow: hidden;
        background-color: #0B0D19;

        &::-webkit-scrollbar {
            width: 8px;
            height: 8px;
            display: block;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #0A0C18;
            border-radius: 4px;  
        }
 
        &::-webkit-scrollbar-track {
            background-color: #FFF;
            border-radius: 4px;
        }

        

    }
    
    a {
        text-decoration: none;
        transition: ease .5s;
        color: rgba(255, 255, 255, .7);
    }
    
    ul, li {
        list-style: none;
    }

    .glide__bullet--active {
        border-bottom: 2px solid #FFF !important;
    }

    span.glide__bullet--active {
        background-color: #FFF;
        color: black !important;
    }
`

export default GlobalStyle;