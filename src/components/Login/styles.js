import styled from 'styled-components';

import Logoary from '../../assets/Logoary.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
    background: url('${Logoary}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 50%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url('${Background}');
    background-color: #1e1e1e;

    p {
        color: #000000;
        font-size: 30px;
        font-weight: 800;
    }

    a {
        text-decoration: underline;
    }
`;

export const Title = styled.h2`
     font-family: "Road Rage", sans-serif;
     font-size: 40px;
     color: #0000FF;

     span {
        color: #FF0000;
        font-family: 'Road Rage', sans-serif;
     }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        width: 100%;
        border: none;
        height: 50px;
        border-radius: 10px;
        padding: 0 20px;
    }

    label {
        font-size: 25px;
        font-weight: 600;
        color: #000000;
    }

    p {
        font-size: 16px;
        line-height: 80%;
        color: #cf3057;
        font-weight: 600;
        height: 10px;
    }
`;
