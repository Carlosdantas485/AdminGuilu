import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    .company-list {
        margin-top: 2%;
        width: 90%;
        margin-right:5%;
        background: #fff;
        border-radius: 5px;
        font-family: 'Roboto',sans-serif;

    }

    .text {
        width: 100%;
        background: #E2EAD4;
    }

    .company-name {
        font-weight: bold;
    }

    .company-list.text p {
        margin: 5px 0 10px 5px;
        padding: 2px;
    }

    .company-list ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-inline-start: 0;
    }


    .tittle {
        color: #B8CF8C;
        padding: 2%;
        margin: 2%;
        font-size: 25px;
    }

    .company-list li {
        display: flex;
        justify-content: space-between;
	    width: 90%;
        height: auto;
        color: #636363;
        background: #E2EAD4;
        border: 3px double #000;
        border-radius: 5px;
        margin-bottom: 10px;


    }

    .company-list.button {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        background: #E2EAD4;

    }

    .company-list button {
        margin: 0 5px 5px 0;
    }


    .company-list button svg {
        height: 15px;
        width: 15px;
    }

    .modal-delete{
        background:#fff;
        width: 100%;
        height: 100%;
        background: rgba (0,0,0,0.5)
    }

`;
