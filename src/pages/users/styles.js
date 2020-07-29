import styled from 'styled-components';
import { Modal } from '@material-ui/core';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;

    display: flex;
    justify-content: center;

    .container{
        width:100%;
        padding: 20px;
        margin: 15px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 1px 1px 2px grey;

        .headerPage{
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-wrap:wrap;

            .back{
                border: none;
                box-shadow: 1px 1px 2px grey;
                width:150px;
                height: 50px;
                font-weight: bold;
                padding: 5px 15px;
                border-radius: 7px;
                border:2px solid #E2EAD4;
                font-size: 20px;
                background-color: #696969;
                color: #fff;
            }

            .back:hover{
                background-color: #4F4F4F;
                transform: scale(1.02);
                transition: 0.3s;
            }
        }

        h1{
            margin:0;
            padding:0;
            color: #A8BC81;
        }

        .list{
            .user{
                margin-top: 20px;
                padding:10px ;
                margin-top: 20px 0;
                border:3px double grey;
                border-radius:5px;
                background-color:#E2EAD4;

               .headerUser{
                    display:flex;
                    justify-content:space-between;
                    flex-wrap:wrap;

                    h2{
                        background-color:#fff;
                        padding: 8px;
                        border-radius:50px;
                        border:1px solid grey;
                        font-size: 15px;
                        margin-right:10px;
                    }

                    .infoUser{
                        display: flex;
                        flex-wrap:wrap;
                    }

                   .options{
                       display:flex;

                       #pen{
                           margin-right:10px;
                       }

                       .icon{
                           color:#A8BC81;
                           background-color:#fff;
                           padding: 5px;
                           border-radius:5px;

                           &:hover{
                               color: red;
                               cursor: pointer;
                           }
                       }
                   }
               }

            }
        }
    }
    @media(max-width: 768px){
        .list{
            .user{
               .headerUser{

                    h2{
                        width:100%;
                    }
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
      border-radius: 5px;
      width: 100px;
      height: 30px;
      border: 0;
      font-weight:bold;
      font: 500 18px 'Roboto', sans-serif;
      box-shadow: 1px 1px 2px grey;

    }

    .send {
      background-color: #A8BC81;
      color: #fff;
      border-radius: 5px;
      width: 100px;
      height: 30px;
      border: 0;
      font-weight:bold;
      font: 500 18px 'Roboto', sans-serif;
      box-shadow: 1px 1px 2px grey;

    }
}
`;


