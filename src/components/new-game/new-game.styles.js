import styled from 'styled-components';

export const FormContainer = styled.form`
    position: relative;
    max-width: 100%;
    font-size: 1rem;
    margin-top: 20px;
`;

export const FormField = styled.div`
    clear: both;
    margin: 0 0 1em;
    &.error input {
        background: #fff6f6;
        border-color: #e0b4b4;
        color: #9f3a38;
        box-shadow: none;
    }
`;

export const FormLabel = styled.div`
    display: block;
    margin: 0 0 .28571429rem 0;
    color: rgba(0,0,0,.87);
    font-size: .92857143em;
    font-weight: 700;
    text-transform: none;
`;

export const FormInput = styled.input`
    margin: 0;
    outline: 0;
    line-height: 1.21428571em;
    padding: .67857143em 1em;
    font-size: 1em;
    background: white;
    border: 1px solid rgba(34,36,38,.15);
    color: rgba(0,0,0,.87);
    border-radius: .28571429rem;
    box-shadow: 0 0 0 0 transparent inset;
    transition: color .1s ease,border-color .1s ease;
    width: calc(100% - 2em);
    @media screen and (min-width: 1200px) {
        width: 50%;
    }

    &:focus {
        color: rgba(0,0,0,.95);
        border-color: #85b7d9;
        border-radius: .28571429rem;
        background: #fff;
        box-shadow: 0 0 0 0 rgba(34,36,38,.35) inset;
    }
`;

export const FormError = styled.span`
    display: block;
    padding: 0.5em 0;
    font-size: 14px;
    color: #9f3a38;
`;

export const ImageContainer = styled.div`
    display: block;

    img {
        width: 100px;
        height: 100px;
        padding: 0 0 1em;
    }
`;

export const Button = styled.button`
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    outline: 0;
    border: none;
    vertical-align: baseline;
    background: #e0e1e2 none;
    color: rgba(0,0,0,.6);
    margin: 0 .25em 0 0;
    padding: 1.3em 3em;
    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    line-height: 1em;
    text-align: center;
    text-decoration: none;
    border-radius: .28571429rem;
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
    &:hover {
        background-color: #cacbcd;
        background-image: none;
        box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
        color: rgba(0,0,0,.8);
    }
`;