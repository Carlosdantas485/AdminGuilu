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

        .confirm{
            display:flex;
            flex-direction: column;

            input{
                height: 25px;
                padding: 5px 15px;
                border-radius: 50px ;
                border:1px solid grey;
                font-size: 18px;
                background-color:#E2EAD4;
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
