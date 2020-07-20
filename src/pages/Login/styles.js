import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;

    .cardDiv {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        height: 53vh;
        width: 32vw;
        background: #fff;
        border-radius: 20px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
        padding: 0 55px;

        .logoDiv {
            display: flex;
            justify-content: center;

            img {
                width: 16vw;
            }
        }

        .formDiv {
            display: flex;
            flex-direction: column;
            font-weight: bold;
            color: #595959;

            p {
                margin-bottom: 0.5rem;
                font-size: 35px;
            }

            input {
                background: #F2F1F1;
                border-radius: 10px;
                box-sizing: border-box;
                padding: 1rem 0.7rem;
                border: none;
                margin-top: 0.8rem;

                ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                    color:#9EAD82;
                    opacity: 1; /* Firefox */
                    font-size: 19px;
                    }

                :-ms-input-placeholder { /* Internet Explorer 10-11 */
                    color:#9EAD82;
                    font-size: 19px;
                    }

                ::-ms-input-placeholder { /* Microsoft Edge */
                    color:#9EAD82;
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
                background: #B8CF8C;
                color: #fff;
                font-size: 20px;
                font-weight: 500;
                font-family: 'Roboto' sans-serif;
                box-sizing: border-box;
                padding: 0.7rem 1.1rem;
                border: none;
                border-radius: 10px;
            }

            a {
                color: #68970E;
            }
        }
    }

    @media screen and (max-width: 1024px) {

        .cardDiv {
            width: 50vw;

            .logoDiv{
                img {
                    width: 25vw;
                }
            }
        }

    }


    @media screen and (max-width: 812px) {

        .cardDiv {
            width: 50vw;
            height: 92vh;

            .logoDiv {
                img {
                    width: 25vw;
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
            width: 50vw;
            height: 30vh;

            .logoDiv {
                img {
                    width: 25vw;
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
            width: 50vw;
            height: 35vh;
        }

    }

    @media screen and (max-width: 740px) {

        .cardDiv {
            width: 50vw;
            height: 92vh;

            .logoDiv {
                img {
                    width: 25vw;
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
        }

    }


    @media screen and (max-width: 415px) {

        .cardDiv {
            display: flex;
            width: 70vw;
            height: 55vh;
            padding: 0 2rem;
            justify-content: center;


            .logoDiv{
                img {
                    width: 100vw;
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

                }
            }
        }
    }

    @media screen and (max-width: 376px) {

        .cardDiv {
            display: flex;
            width: 90vw;
            height: 48vh;
            padding: 0 2rem 2rem 2rem;
            justify-content: center;


            .logoDiv{
                img {
                    width: 100vw;
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

                }
            }
        }
    }
`;
