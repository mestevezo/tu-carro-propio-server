import styled, { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
* {

    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;

}
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const Button = styled.button`
    display: ${({ buttonDisplay }) => (buttonDisplay ? 'inline-block' : 'none')};
    border-radius: 4px;
    width: 300px;
    margin-bottom: 10px;
    background: ${({ primary }) => (primary ? '#f7df1e' : '#202020')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    color: #202020;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:active {
        transition: all 0.3s ease-out;
        transform: scale(0.98);
        }

    &:hover {
        transition: all 0.3s ease-out;
        background: ${({ primary }) => (primary ? '#f7e76a' : '#404040')}; 
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export default GlobalStyle;