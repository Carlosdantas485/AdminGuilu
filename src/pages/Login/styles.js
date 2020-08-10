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
                width:100%;
                background: #f2f1f1;
                box-sizing: border-box;
                padding: 1rem 0.7rem;
                border: 1px solid #E2EAD4;
                border-bottom: 2px solid #9ead82;
                margin-top: 0.8rem;
                font-size:18px;

                ::placeholder {
                    color: #9ead82;
                    opacity: 1;
                    font-size: 19px;
                }

                :-ms-input-placeholder {
                    color: #9ead82;
                    font-size: 19px;
                }

                ::-ms-input-placeholder {
                    color: #9ead82;
                    font-size: 19px;
                }

            }

            input:focus{
                outline: 0;
            }
        }

        .btnDiv {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 1.3rem;

            button {
                background: #b8cf8c;
                width: 100px;
                height: 40px;
                color: #fff;
                font-size: 20px;
                font-weight: bold;
                font-family: 'Roboto' sans-serif;
                box-sizing: border-box;
                border: none;
                border-radius: 10px;
                outline:0;

            }

            .recoverPassword{
                color: #68970e;
                font-weight: bold;
                font-size: 15px;


            }
        }
    }

    @media screen and (max-width: 533px) {
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



`;
