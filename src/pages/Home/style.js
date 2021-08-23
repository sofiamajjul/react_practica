import styled from "styled-components";

export const HomeContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`;

export const Content = styled.div `
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`

export const input = styled.input `
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
    font-family: poppins;
    `
export const button = styled.button`
height: 1.5rem;
border: 1px solid #000;
background: #000;
color: #fff;
border-radius: .25rem 0 0 .25rem;
font-family: poppins;
`

export const ErrorMsg = styled.span`
display: block;
font-size: 0.65rem
color: #e21313;
font-weight: 600;
font-family: poppins;
margin-top: 1rem;
`