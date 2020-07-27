import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;

    .cardDiv {
        width: 50%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        height: 390px;
        width: 500px;
        background: #fff;
        border-radius: 20px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
        padding: 0 55px;

        .logoDiv {
            display: flex;
            justify-content: center;

            img {
                margin-top: 30px;
                width: 212px;
                height: auto;
            }
        }

        .formDiv {
            margin-top:20px;
            display: flex;
            flex-direction: column;
            font-weight: bold;
            color: #595959;

            p {
                margin-bottom: 0.5rem;
                font-size: 35px;
            }

            input {
                background: #f2f1f1;
                border-radius: 10px;
                box-sizing: border-box;
                padding: 1rem 0.7rem;
                border: none;
                margin-top: 0.8rem;

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
        }

        .btnDiv {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 1.3rem;

            button {
                background: #b8cf8c;
                color: #fff;
                font-size: 20px;
                font-weight: 500;
                font-family: 'Roboto' sans-serif;
                box-sizing: border-box;
                padding: 0.7rem 1.1rem;
                border: none;
                border-radius: 10px;
            }

            .recoverPassword{
                color: #68970e;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .cardDiv {
            width: 420px;
            height: 410px;

            .logoDiv {
                img {
                    width: 240px;
                    height: auto;
                }
            }
        }
    }

    @media screen and (max-width: 812px) {
        .cardDiv {
            width: 380px;
            height: 350px;

            .logoDiv {
                img {
                    width: 203px;
                    height: auto;
                }
            }

            .formDiv {
                p {
                    font-size: 20px;
                }
            }

            .btnDiv {
                display: flex;
                align-items: center;
                margin-top: 1rem;

                button {
                    margin: 0;
                }
            }
        }
    }

    @media screen and (max-width: 800px) {
        .cardDiv {
            width: 410px;
            height: 350px;

            .logoDiv {
                img {
                    width: 203px;
                    height: auto;
                }
            }

            .formDiv {
                p {
                    font-size: 20px;
                }
            }

            .btnDiv {
                display: flex;
                align-items: center;
                margin-top: 1rem;

                button {
                    margin: 0;
                }
            }
        }
    }

    @media screen and (max-width: 770px) {
        .cardDiv {
            width: 380px;
            height: 350px;
        }
    }

    @media screen and (max-width: 740px) {
        .cardDiv {
            width: 380px;
            height: 45%;

            .logoDiv {
                img {
                    width: 200px;
                    height: auto;
                }
            }

            .formDiv {
                p {
                    font-size: 20px;
                }
            }

            .btnDiv {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 1rem;

                button {
                    margin: 0;
                    width: 100%;
                    margin-bottom: 1rem;
                }
            }
            .recoverPassword{
                margin-bottom:50px;
            }
        }
    }

    @media screen and (max-width: 415px) {
        .cardDiv {
            display: flex;
            width: 400px;
            height: 400px;
            padding: 0 2rem;
            justify-content: center;

            .logoDiv {
                img {
                    width: 200px;
                    height: auto;
                }
            }

            .formDiv {
                display: flex;
                flex-direction: table-column;
                align-items: center;

                p {
                    font-size: 25px;
                }

                input {
                    width: 100%;
                }
            }

            .btnDiv {
                display: flex;
                flex-direction: column;

                button {
                    width: 100%;
                    margin-bottom: 0.6rem;
                }

                a {
                    margin-bottom: 1rem;
                }
            }
        }
    }

    @media screen and (max-width: 376px) {
        .cardDiv {
            display: flex;
            width: 340px;
            height: 370px;
            padding: 0 2rem 2rem 2rem;
            justify-content: center;

            .logoDiv {
                img {
                    width: 200px;
                    height: auto;
                }
            }

            .formDiv {
                display: flex;
                flex-direction: table-column;
                align-items: center;

                p {
                    font-size: 25px;
                }

                input {
                    width: 100%;
                }
            }

            .btnDiv {
                display: flex;
                flex-direction: column;

                button {
                    width: 100%;
                    margin-bottom: 0.6rem;
                }

                a {
                    margin-bottom: 1rem;
                }
            }
        }
    }

    @media screen and (max-width: 376px) {
        
        .cardDiv {
            width: 300px;
            height: 400px;
            padding: 5px 10px;
        }
           
    }

    @import url('https://fonts.googleapis.com/css?family=Exo:400,700');

    .cardDiv{
        position: absolute;
    }

    .circles{
        position: absolute;
        top: 0;
        left: 0;
        width: 97%;
        height: 96.5%;
        overflow: hidden;
    }

    .circles li{
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
        animation: animate 25s linear infinite;
        bottom: -150px;
        
    }

    .circles li:nth-child(1){
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
    }


    .circles li:nth-child(2){
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }

    .circles li:nth-child(3){
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }

    .circles li:nth-child(4){
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }

    .circles li:nth-child(5){
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }

    .circles li:nth-child(6){
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
    }

    .circles li:nth-child(7){
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
    }

    .circles li:nth-child(8){
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }

    .circles li:nth-child(9){
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
    }

    .circles li:nth-child(10){
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
    }



    @keyframes animate {

        0%{
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
        }

        100%{
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
        }

    }

    @media(max-width:660px){

        .circles{
            width: 89%;

        }
    }
`;
