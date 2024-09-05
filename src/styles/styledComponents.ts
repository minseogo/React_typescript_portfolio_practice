// src/styles/styledComponents.ts
import styled from 'styled-components';

interface TitleProps {
    title?: boolean;
}

interface LeadcopyProps {
    leadcopy?: boolean;
}

interface ButtonProps {
    button?: boolean;
    bgcolor?: string;
    fontcolor?: string;
    fontsize?: string;
    weight?: string;
}

export const Title = styled.h2<TitleProps>`
    font-family: ${props => props.title ? "Rubik" : "Pretendard"};
    font-size: 38px;
    font-weight: 700;
    color: #FE663F;
    letter-spacing: -0.5px;
    line-height: 2.5rem;
    @media (max-width: 990px) {
        font-size: 28px;
        line-height: 1.7rem;
    }
`;

export const Leadcopy = styled.p<LeadcopyProps>`
    font-family: ${props => props.leadcopy ? "Pretendard" : "Rubik"};
    font-size: 18px;
    font-weight: 600;
    color: #414B5A;
    letter-spacing: -0.5px;
    line-height: 1.8rem;
    @media (max-width: 990px) {
        font-size: 16px;
        line-height: 1.4rem;
    }
`;

export const Button = styled.button<ButtonProps>`
    background-color: ${props => props.button ? "#fe663f" : props.bgcolor || "initial"};
    color: ${props => props.button ? "#fff" : props.fontcolor || "initial"};
    font-family: ${props => props.button ? "Pretendard" : "Rubik"};
    font-size: ${props => props.button ? "15px" : props.fontsize || "initial"};
    font-weight: ${props => props.button ? "400" : props.weight || "initial"};
    letter-spacing: -0.5px;
    line-height: 1.5rem;
    border: none;
    border-radius: 20px;
    width: 110px;
    height: 37px;
    text-align: center;
    padding: 0;
    margin: 0;
    @media (max-width: 990px) {
        font-size: 14px;
        background-color: #fe663f;
        color: #fff;
        border: none;
        border-radius: 20px;
        width: 110px;
        height: 37px;
        text-align: center;
        padding: 0;
        margin: 0;
    }
`;
