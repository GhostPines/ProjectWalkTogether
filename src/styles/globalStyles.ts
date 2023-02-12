import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0 ;
        padding: 0 ;
        
    }

    body{


        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
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
    background-color: #00ff0000; // 투명
    }

   
`;

export default GlobalStyle;

// 코멘트 배경, 스크롤바색
// rgb(46, 46, 46);
