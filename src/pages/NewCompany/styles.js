import styled, {css} from 'styled-components';
import { Modal } from '@material-ui/core';


export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;

    display: flex;
    justify-content: center;

    .container{
        width:50%;
        padding: 20px;
        margin: 15px;
        background-color: #fff;
        box-shadow: 1px 1px 2px grey;

        .Company{
            margin:20px 0;


            h2{
                margin:0;
                font-size: 35px;
                color: #A8BC81;
                font-weight: bold;
            }

            h3{
                margin:0;
                font-size: 15px;

            }

            .infoCompany{
                display:flex;
                align-items:center;
                flex-direction:column;

                img{
                    width: 170px;
                    margin-bottom: 20px;
                }
            }

        }

        .box{
            width:100%;
            display: flex;

            h3{
                margin: 0;
                margin-top: 10px;
                font-size: 18px;
                color: #A8BC81;
                font-weight: bold;
            }

            input {
                width:100%;
                background: #f2f1f1;
                box-sizing: border-box;
                padding: 1rem 0.7rem;
                border: 1px solid #E2EAD4;
                border-bottom: 2px solid #9ead82;
                margin-top: 0.8rem;
                font-size:18px;
                outline: 0;

                ::placeholder {
                    /* Chrome, Firefox, Opera, Safari 10.1+ */
                    color: #9ead82;
                    opacity: 1; /* Firefox */
                    font-size: 19px;
                }

                :-ms-input-placeholder {
                    /* Internet Explorer 10-11 */
                    color: #9ead82;
                    font-size: 19px;
                }

                ::-ms-input-placeholder {
                    /* Microsoft Edge */
                    color: #9ead82;
                    font-size: 19px;
                }
            }

             #valid{
                ${
                    props => props.validat? css`
                        border: 2px solid green;
                    ` : css`
                        border: 2px solid red;
                    `
                }
            }

            .name{
                width:50%;
                margin-right: 20px;
            }

            .user{
                width:50%;
            }

            .email{
                width:100%;
            }

            .password{
                width:50%;
                margin-right: 20px;
            }

            .confirm{
                width:50%;
            }
        }

        .options{
            margin-top: 25px;
            display: flex;
            justify-content: space-between;

            button{
                border: none;
                box-shadow: 1px 1px 2px grey;
                width:110px;
                height: 40px;
                font-weight: bold;
                padding: 5px 15px;
                border-radius: 5px;
                font-size: 17px;
                outline: 0;
            }

            .back{
                background-color: #c4c4c4;
                color: white;

            }

            .back:hover{
                background-color: #b3b3b3;
                transition: 0.3s;
            }

            .save{
                background-color: #A1BF73;
                color: white;

            }

            .save:hover{
                background-color: #84a84d;
                transition: 0.3s;
            }
        }
    }

    @media(max-width: 1200px){
        .container{
            width:100%;
            .box{
                width:100%;
                display: flex;
                flex-direction:column;

                .name{
                    width:100%;
                    margin-right: 20px;
                }

                .user{
                    width:100%;
                }

                .email{
                    width:100%;
                }

                .password{
                    width:100%;
                    margin-right: 20px;
                }

                .confirm{
                    width:100%;
                }
            }
        }
    }

`;


export const Actions = styled(Modal)`
    display: flex;
    justify-content: center;

    .containerModal {
        width: 500px;
        height: 200px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        margin-top: 10%;
        padding: 15px;
        outline: 0;
    }

    .titleModal {
        font: 600 25px Mukta, sans-serif;
        color: #000;
        margin: 20px 0 15px;
    }

    .line {
        border-bottom: 5px solid red;
        width: 10%;
    }

    p {
        margin-top: 15px;
        font-weight:bold;
    }

    .group {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;

        .back {
            background-color: red;
            color: #fff;
            border: none;
            box-shadow: 1px 1px 2px grey;
            width:100px;
            height: 40px;
            font-weight: bold;
            padding: 5px 15px;
            border-radius: 7px;
            font-size: 20px;
            outline: 0;
        }

        .send {
            background-color: #A8BC81;
            color: #fff;
            border: none;
            box-shadow: 1px 1px 2px grey;
            width:100px;
            height: 40px;
            font-weight: bold;
            padding: 5px 15px;
            border-radius: 7px;
            font-size: 20px;
            outline: 0;
        }
    }
`;

export const AcceptedModal = styled(Modal)`
    display: flex;
    justify-content: center;

    .containerModal {
        width: 500px;
        height: 200px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        margin-top: 10%;
        padding: 15px;
        outline: 0;
    }

    .titleModal {
        font: 600 25px Mukta, sans-serif;
        color: #000;
        margin: 20px 0 15px;
    }

    .line {
        border-bottom: 5px solid #A8BC81;
        width: 10%;
    }

    p {
        margin-top: 15px;
        font-weight:bold;
    }

    .group {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;

        .back {
            background-color: red;
            color: #fff;
            border: none;
            box-shadow: 1px 1px 2px grey;
            width:100px;
            height: 40px;
            font-weight: bold;
            padding: 5px 15px;
            border-radius: 7px;
            font-size: 20px;
            outline: 0;
        }

        .send {
            background-color: #A8BC81;
            color: #fff;
            border: none;
            box-shadow: 1px 1px 2px grey;
            width:100px;
            height: 40px;
            font-weight: bold;
            padding: 5px 15px;
            border-radius: 7px;
            font-size: 20px;
            outline: 0;
        }
    }
`;




