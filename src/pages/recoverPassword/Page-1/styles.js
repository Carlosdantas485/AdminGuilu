import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;

    display: flex;
    justify-content: center;

    .container{
        width: 40%;
        padding: 20px;
        margin: 15px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 1px 1px 2px grey;

        .div-logo{
            display:flex;
            justify-content: center;
            img{
                margin-top: 20px;
                width:400px;
            }
        }
        .confirm{
            display:flex;
            flex-direction: column;

            input{
                width:100%;
                background: #f2f1f1;
                border-radius: 10px;
                box-sizing: border-box;
                padding: 1rem 0.7rem;
                border: 1px solid #E2EAD4;
                margin-top: 0.8rem;
                font-size:18px;
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
                justify-content:space-between;

                button{
                margin-top: 15px;
                border: none;
                box-shadow: 1px 1px 2px grey;
                width:130px;
                height: 50px;
                font-weight: bold;
                padding: 5px 15px;
                border-radius: 5px;
                border:2px solid #fff;
                font-size: 20px;
                }

                .back{
                    background-color: #696969;
                    color: white;

                }

                .back:hover{
                    background-color: #4F4F4F;
                    transition: 0.3s;
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
            width: 100%;
        }
    }


`;
