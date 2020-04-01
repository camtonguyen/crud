import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
`;

export const NavItem = styled(NavLink)`
    line-height: 1;
    text-decoration: none;
    user-select: none;
    background: none;
    padding: 1em 0;
    text-align: center;
    width: 100%;
    border: 1px solid rgba(34, 36, 38, 0.15);

    &:nth-child(2) {
        border-left: none;
        border-right: none;
    }

    &.active {
        background: rgba(0, 0, 0, 0.05);
        color: rgba(0, 0, 0, 0.95);
        font-weight: normal;
        box-shadow: none;
    }
    &:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.03);
    }
`;