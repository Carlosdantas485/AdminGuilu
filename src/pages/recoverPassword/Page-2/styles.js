import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    margin:0;
    padding: 0;


    .container{
        width: 40%;
        padding: 20px;
        margin: 15px;
        background-color: #fff;
        box-shadow: 1px 1px 2px grey;

        .div-logo{
            display:flex;
            justify-content: center;
            img{
                margin-top: 20px;
                width:200px;
            }
        }
        .confirm{
            display:flex;
            flex-direction: column;

            h2{
                margin: 0 ;
                margin-top: 10px;
                font-size: 15px;
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
                outline:0;

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

            .recover-btns{
                width: 100%;
                display:flex;
                justify-content:center;

                button{
                    margin-top: 20px;
                    border: none;
                    box-shadow: 1px 1px 2px grey;
                    width:110px;
                    height: 40px;
                    font-weight: bold;
                    padding: 5px 15px;
                    border-radius: 5px;
                    font-size: 17px;
                    outline:0;

                }

                .recover{
                    background-color: #A1BF73;
                    color: white;

                }

                .recover:hover{
                    background-color: #84a84d;
                    transition: 0.3s;
                }
            }
        }
    }

    @media(max-width: 1200px){
        .container{
            width: 80%;
        }
    }



`;
