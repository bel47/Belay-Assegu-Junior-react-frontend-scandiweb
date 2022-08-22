import styled, {css, span} from "styled-components";

export const NavbarLink = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    padding: 19px 30px;
    color: var(--c-text);
    position: relative;
    cursor: pointer;
    & span {
        width: 65px;
        height: 20px;
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
        align-items: center;
        text-align: center;
        color: var(--c-text);
        text-transform: uppercase;
    }

    ${props =>
        props.selected &&
        css`
            font-weight: 600;
            color: #5ECE7B;
            border-bottom: 2px solid #5ECE7B;
            padding-bottom: 31px;
            padding-top: 29px;
            text-align: center;
         `
    }
`;


