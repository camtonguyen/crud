import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemContainer = styled.div`
    width: calc(100% - 30px);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 0 15px 30px;
    max-width: 100%;
    min-height: 0;
    border: none;
    border-radius: .28571429rem;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;

    @media screen and (min-width: 767px) and (max-width: 1199px) {
        width: calc(100%/2 - 30px)
    }
    @media screen and (min-width: 1200px) {
        width: calc(100%/4 - 30px)
    }
`;

export const ItemImage = styled.div`
    width: 100%;
    padding: 0;
    border-bottom: 1px solid rgba(0,0,0,.1);

    img {
        max-width: calc(100% - 20px);
        padding: 10px;
    }
`;

export const ItemContent = styled.div`
    flex-grow: 1;
    border: none;
    background: 0 0;
    margin: 0;
    padding: 1em;
    box-shadow: none;
    font-size: 1em;
    border-radius: 0;
    width: 100%;
`;

export const ItemHeader = styled.div`
    display: block;
    margin: '';
    color: rgba(0,0,0,.85);
    font-size: 20px;
    text-align: center;
    padding: 0   0 .5em;
`;

export const ItemExtraContent = styled.div`
    max-width: 100%;
    min-height: 0;
    flex-grow: 0;
    position: static;
    background: 0 0;
    width: auto;
    margin: 0 0;
    padding: .75em 1em;
    top: 0;
    left: 0;
    color: rgba(0,0,0,.4);
    box-shadow: none;
`;

export const GroupButton = styled.div`
    display: inline-flex;
    flex-direction: row;
    vertical-align: baseline;
    margin: 0 .25em 0 0;
    width: 100%;

    a {
        flex: 1 0 auto;
        margin: 0;
        border-radius: 0;
        width: calc(50% - .5em)
        display: inline-block;
        min-height: 1em;
        outline: 0;
        border: none;
        vertical-align: baseline;
        padding: .78571429em 1.5em .78571429em;
        text-transform: none;
        text-shadow: none;
        font-weight: 700;
        line-height: 1em;
        text-align: center;
        text-decoration: none;
        user-select: none;
        cursor: pointer;
        color: white;
    }
`;

export const GreenButton = styled(Link)`
    box-shadow: 0 0 0 1px #21ba45 inset;
    background-color: #21ba45;
    border-left: none;
    margin-left: 0;
    border-top-left-radius: .28571429rem!important;
    border-bottom-left-radius: .28571429rem!important;
`;

export const RedButton = styled(Link)`
    box-shadow: 0 0 0 1px #db2828 inset;
    background-color: #db2828;
    border-top-right-radius: .28571429rem!important;
    border-bottom-right-radius: .28571429rem!important;
    margin-left: -1px;
`;