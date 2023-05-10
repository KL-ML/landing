import styled from "@emotion/styled";

export const SidebarWrap = styled.div`
    display: flex;
    justify-content: space-around;
    height: 70px;
    align-items: center;
    /* padding: 0 12px; */
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: #302936;
    color: aliceblue;
    font-size: 12px;
    width: 100vw;

    @media (min-width: 420px) {
       font-size: 13px;
    }

    @media(min-width: 768px) {
        font-size: 14px;
    }

    @media(min-width: 1200px) {
        /* max-width: 1200px; */
        font-size: 17px;
    }
`;