import styled from "@emotion/styled";

export const LayoutWrap = styled.div`
    
    /* padding: 0 12px; */
    background-color: #29252d;
    color: aliceblue;
`;
export const Main = styled.main`
    padding-left: 15px;
    padding-right: 15px;

    margin-left: auto;
    margin-right: auto;

    /* max-width: 480px; */
    height: 100vh;

    @media (min-width: 320px) {
        max-width: 480px;
    }

    @media(min-width: 768px) {
        max-width: 768px;
    }

    @media(min-width: 1200px) {
        max-width: 1200px;
    }
`;