import { createGlobalStyle } from 'styled-components';
// import SUITEBold from '../fonts/SUITEBold.woff2';
// import SUITERegular from '../fonts/SUITERegular.woff2';
// import SUITESemiBold from '../fonts/SUITESemiBold.woff2';

const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
    }


    body{
        font-family: 'SUITEBold','SUITERegular','SUITESemiBold', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        
    }

    h1,
    h2,
    h3,
    h4,
    input{
        margin: 0;
        bottom: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    font-size: inherit;
    line-height: inherit;
    }

    body{
        color: #202020;
        font-size: 16px;
        line-height: 1.7;

    }
/* body > div > div{
    min-height: 94vh;
} */
    ul{
        list-style: none;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    button,
    input {
    -webkit-border-radius: 0;
    border-radius: 0;
    border: 0;
    }

    button{
        cursor: pointer;
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        -webkit-user-drag: none;
    }

    div {
        box-sizing: border-box;
    }

    main {
    display: block;
    }

    ::-webkit-scrollbar {
    width: 10px;
    }
    ::-webkit-scrollbar-thumb{
    background: #48596e;
    border-radius: 25px;
    }
    ::-webkit-scrollbar-track{
    background-color: #00ff0000; 
    }
    @font-face {
    font-family: 'SUITEBold';
    src: url('../fonts/SUITEBold.woff2') format('web open font format');
}@font-face {
    font-family: 'SUITERegular';
    src: url('../fonts/SUITERegular.woff2') format('web open font format');
}
@font-face {
    font-family: 'SUITESemiBold';
    src: url('../fonts/SUITESemiBold.woff2') format('web open font format');
}

  
`;

export default GlobalStyle;
