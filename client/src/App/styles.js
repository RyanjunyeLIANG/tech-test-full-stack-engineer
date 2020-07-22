import styled from 'styled-components';

const Application = styled.div`
    font-family: Roboto;
    font-weight: 300;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    position: absolute;
    color: white;
    padding: 10px;
    svg, span {
        padding-left: 10px;
    }
    @media only screen and (min-width: 1000px) {
        top: 20%;
        left: 20%;
        width: 50vw;
        height: 50vh;
    }
    @media only screen and (max-width: 999px) {
        height: 100vh;
    }
`;

export {
    Application,
};