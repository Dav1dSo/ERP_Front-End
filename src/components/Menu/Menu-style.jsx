import styled from "styled-components";

const WrapMenu = styled.div`
    height: 100vh;
    width: 22vw;
    background-color: #566164;

    h1 {
        color: black;
    }

    @media (max-width: 768px) {
        width: 100%;  
    }
`;

const List = styled.ul`
    padding: 10%;
    list-style: none;
    display: flex;
    flex-direction: column;  

    li {
        margin: 4%;
        border-bottom: 0.1px solid #ffff;
        font-size: 1.2rem;
    }

    a {
        text-decoration: none;
        color: #ffff;
    }

    @media (max-width: 768px) {
        flex-direction: row;  
        padding: 5%;  
    }
`;

export { WrapMenu, List };
