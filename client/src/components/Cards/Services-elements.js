import styled from 'styled-components'

export const ServicesContainer = styled.div` 
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #202020;

    @media screen and (max-width: 760px) {
        padding-bottom: 2rem;
        padding-top: 20%;
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 40px;
    padding: 0 20px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div` 
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

    @media screen and (max-width: 760px) {
        width: 300px;
    }

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`

export const ServicesIcon = styled.img` 
    height: 120px;
    width: 120px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1` 
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    color: #202020;
    margin-top: 20px;
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: center;
`

export const ServicesP = styled.p`
    color: #202020;
    font-size: 1rem;
    text-align: center;
`