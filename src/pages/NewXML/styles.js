import styled from 'styled-components';
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

        .Dashboard{
            margin:20px 0;

            h3{
                margin:0;
                font-size: 15px;

            }

            .infoDashboard{
                display:flex;
                align-items:center;
                 justify-content: space-between;
                h2{
                    margin:0;
                    font-size: 35px;
                    color: #A8BC81;
                    font-weight: bold;
                }

                img{
                    width: 170px;
                    margin-bottom: 20px;
                }

                .back{
                    border: none;
                    box-shadow: 1px 1px 2px grey;
                    width:100px;
                    height: 40px;
                    font-weight: bold;
                    padding: 5px 15px;
                    border-radius: 5px;
                    font-size: 17px;
                    background-color: #A1BF73;
                    color: white;
                    outline:0;


                }

                .back:hover{
                    background-color: #84a84d;
                    transition: 0.3s;
                }

            }

        }

        .box{
            width:100%;

            h3{
                margin: 0;
                margin-top: 20px;
                font-size: 18px;
                color: #A8BC81;
                font-weight: bold;
            }

            .inport{
                display: flex;
                align-items: center;
                justify-content: center;

                button{
                    margin-top: 0.8rem;
                    font-size: 15px;
                    font-weight: bold;
                    border: none;
                    background-color: #b3b3b3;
                    color: white;
                    width: 110px;
                    height: 55px;
                    border-radius: 0px  10px 10px 0px
                    outline:0;

                }
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

            .XML_LINK{
                width:100%;
                margin-right: 20px;
            }

            .import_pc{
                width:100%;
                a{
                    color: #fff;
                    text-decoration: none;
                }

            }
        }


        .options{
            margin-top: 25px;
            display: flex;
            justify-content: flex-end;

            button{
                border: none;
                box-shadow: 1px 1px 2px grey;
                width:100px;
                height: 40px;
                font-weight: bold;
                padding: 5px 15px;
                border-radius: 5px;
                font-size: 17px;
                outline:0;

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
    outline:0;

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
        outline:0;

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
        outline:0;

    }
}
`;






