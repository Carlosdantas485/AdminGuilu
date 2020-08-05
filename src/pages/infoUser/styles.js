import styled from 'styled-components';
import { Modal } from '@material-ui/core';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;

    display: flex;
    justify-content: center;

    .container{
        padding: 20px;
        margin: 15px;
        background-color: #fff;
        box-shadow: 1px 1px 2px grey;

        .user{
            display:flex;
            align-items:center;

            .avatar {
                border: 5px solid #a8bc81;
                border-radius: 50%;
                margin-right:20px;

                display: flex;
                justify-content: center;
                align-items: center;
            }

            h1{
                margin:0;
                margin-top:20px;
                color: #A8BC81;
                font-weight: bold;
            }

            h2{
                margin:0;
                font-size: 18px;
                font-weight: bold;
            }

        }
        .inputs{
            width: 100%;

            .box{
                margin-top: 10px;
                display:flex;
                flex-wrap:wrap;

                h3{
                    margin:0;
                    font-size: 18px;
                    margin-bottom: 5px;
                    color: #A1BF73;
                    font-weight: bold;
                }

                input{
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
                .name{
                    width: 64%;
                    margin-right:10px;
                    display:flex;
                    flex-direction:column;

                }
                .cel{
                    width: 34%;
                    display:flex;
                    flex-direction:column;
                }

                .email{
                    width: 50%;
                    margin-right:10px;
                    display:flex;
                    flex-direction:column;
                    input{
                        width:100%;
                        border-right:0;
                        border-radius:10px ;

                    }

                }

                .cpf{
                    width: 47%;
                    display:flex;
                    flex-direction:column;
                    input{
                        width:100%;
                        border-right:0;
                        border-radius:10px;

                    }

                }

                .cep{
                    width: 26%;
                    margin-right:10px;
                    display:flex;
                    flex-direction:column;

                }

                .number{
                    width: 16%;
                    margin-right:10px;
                    display:flex;
                    flex-direction:column;

                }

                .complement{
                    width: 54.5%;
                    display:flex;
                    flex-direction:column;
                }

                .bairro{
                    width: 54%;
                    margin-right:10px;
                    display:flex;
                    flex-direction:column;
                }

                .logradouro{
                    width: 44%;
                    display:flex;
                    flex-direction:column;
                }

                .city{
                    width: 85%;
                    margin-right:10px;
                    display:flex;
                    flex-direction:column;
                }

                .uf{
                    display:flex;
                    flex-direction:column;

                    select{
                        margin-top: 19px;
                        width:100px;
                        height:56px;
                        font-size:20px;
                        font-weight: bold;
                        border-radius:10px;
                        border: 1px solid #E2EAD4;
                        background-color:grey;
                        color: #fff;
                    }
                }
            }

        }
        .options{
            margin-top: 25px;
            display: flex;
            justify-content: space-between;

            button{
                border: none;
                box-shadow: 1px 1px 2px grey;
                margin-top: 20px;
                width:130px;
                height: 60px;
                font-weight: bold;
                padding: 5px 15px;
                border-radius: 7px;
                border:2px solid #E2EAD4;
                font-size: 20px;
            }

            .back{

                background-color: #696969;
                color: #fff;
            }

            .back:hover{
                background-color: #4F4F4F;
                transition: 0.3s;
            }

            .save{
                background-color: #A1BF73;
                color: #fff;
            }

            .save:hover{
                background-color: #84a84d;
                transition: 0.3s;
            }
        }
    }

    @media(max-width: 768px){
        .container{
            width:100%;
            .user{
                width:100%;
                flex-direction:column;
                text-align:center;
            }
            .inputs{
                .box{
                    margin:0;
                    flex-direction:column;
                    h3{
                        margin-top:10px;
                    }

                    .name{
                    width: 100%;


                    }
                    .cel{
                        width: 100%;
                    }

                    .email{
                        width: 100%;
                        input{
                            width: 87.5%;
                            border: 1px solid grey;
                            border-radius: 5px;
                        }

                    }

                    .cpf{
                        width: 100%;
                        input{
                            width: 87.5%;
                            border: 1px solid grey;
                            border-radius: 5px;
                        }

                    }

                    .cep{
                        width: 100%;
                    }

                    .number{
                        width: 100%;

                    }

                    .complement{
                        width: 100%;
                    }

                    .bairro{
                        width: 100%;
                    }

                    .logradouro{
                        width: 100%;
                    }

                    .city{
                        width: 100%;
                    }

                    .uf{
                        margin-top:10px;
                    }

                }

            }
        }

    }
`;

export const Edit = styled(Modal)`
  display: flex;
  justify-content: center;

  .containerModal {
    width: 500px;
    height: 200px;
    background-color: #E2EAD4;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin-top: 10%;
    padding: 15px;

  }

  .titleModal {
    font: 600 25px Mukta, sans-serif;
    color: #000;
    margin: 20px 0 15px;
  }

  .line {
    border-bottom: 5px solid #000;
    width: 10%;
  }

    p{
        margin-top: 10px;
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
        width:120px;
        height: 40px;
        font-weight: bold;
        padding: 5px 15px;
        border-radius: 7px;
        border:2px solid #E2EAD4;
        font-size: 20px;

    }

    .send {
        background-color: #A8BC81;
        color: #fff;
        border: none;
        box-shadow: 1px 1px 2px grey;
        width:110px;
        height: 40px;
        font-weight: bold;
        padding: 5px 15px;
        border-radius: 7px;
        border:2px solid #E2EAD4;
        font-size: 20px;

    }
}
`;
