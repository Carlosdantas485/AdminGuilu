import styled from 'styled-components';
import { Modal } from '@material-ui/core';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;

    display: flex;
    justify-content: center;

    .container{
        width:40%;
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
                width:130px;
                height: 50px;
                font-weight: bold;
                padding: 5px 15px;
                border-radius: 7px;
                border:2px solid #ccc;
                font-size: 20px;
                background-color: #A8BC81 ;
                color: #fff;
            }

            .back:hover{
                background-color: #91aa5f;
                transition: 0.3s;
            }
        }

        h1{
            margin:0;
            padding:0;
            color: #A8BC81;
            font-size: 35px;
        }

        .btn-back{
            margin:10px 0;

        }

        .list{
            display:flex;
            flex-direction:column;

            .Company{
                margin: 5px ;
                padding:10px ;
                margin-top: 20px 0;
                background-color:#e3e3e3;
                box-shadow: 1px 1px 2px grey;

               .headerCompany{
                    display:flex;
                    justify-content:space-between;
                    flex-wrap:wrap;

                    h2{
                        margin:0;
                        margin-top: 10px;
                        padding: 8px;
                        border-radius:10px;
                        font-size: 15px;
                    }

                    .infoCompany{
                        display: flex;
                        flex-direction:column;
                        margin-right: 10px;
                    }

                   .options{
                       display:flex;

                       #pen{
                           margin-right:10px;
                       }

                       .icon{
                            color:grey;
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
    @media(max-width: 1200px){
        .container{
            width: 100%;
        }

        .list{
            .Company{
                margin: 10px 0;

               .headerCompany{

                    h2{
                        font-size: 20px;
                    }
               }

            }
        }
        .options{
            margin:10px 0;
            width:100%;
            display:flex;
            justify-content: flex-end;
        }
    }

    @media(max-width: 568px){
        .btn-back{
            margin:10px 0;
            width:100%;
            display:flex;
            justify-content: flex-end;
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
        border: none;
        box-shadow: 1px 1px 2px grey;
        width:100px;
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
        width:100px;
        height: 40px;
        font-weight: bold;
        padding: 5px 15px;
        border-radius: 7px;
        border:2px solid #E2EAD4;
        font-size: 20px;

    }
}
`;

export const Edit = styled(Modal)`
  display: flex;
  justify-content: center;

  .containerModal {
    width: 500px;
    height: 300px;
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

    .inputs-modal{
        margin-top: 10px;
        display:flex;
        flex-direction:column;

        input{
            background: #f2f1f1;
            border-radius: 10px;
            box-sizing: border-box;
            padding: 1rem 0.7rem;
            border: 1px solid #E2EAD4;
            margin-top: 0.8rem;
            font-size:18px;
            ::placeholder {
                color: #9ead82;
                opacity: 1; /* Firefox */
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
