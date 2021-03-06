import styled from 'styled-components';
import { Modal } from '@material-ui/core';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;

    display: flex;
    justify-content: center;

    .container{
        width:55%;
        padding: 20px;
        margin: 15px;
        background-color: #fff;
        box-shadow: 1px 1px 2px grey;

        .headerPage{
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-wrap:wrap;

            .back{
                border: none;
                box-shadow: 1px 1px 2px grey;
                width:100px;
                height: 40px;
                font-weight: bold;
                padding: 5px 15px;
                border-radius: 5px;
                font-size: 17px;
                background-color: #A8BC81 ;
                color: #fff;
                outline: 0;
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

            .user{
                display: flex;
                justify-content:space-between;
                flex-wrap: wrap;
                margin: 5px;
                margin-top: 20px 0;
                background-color:#e3e3e3;
                box-shadow: 1px 1px 2px grey;
                padding: 10px;

                .infoUser{
                    text-align:center;
                    h2{
                        font-size: 15px;
                    }
                }

                .icon_user{
                    display: flex;
                    justify-content:center;
                    align-items: center;

                    width: 60px;
                    height: 60px;
                    font-size: 35px;
                    font-weight:bold;
                    border-radius: 50%;
                    border: 4px double white;
                    background-color:  #91aa5f;
                    color: white;
                }

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

    @media(max-width: 1200px){
        .container{
            width: 100%;
        }
    }

    @media(max-width: 450px){
        .user{
            flex-direction:column;
            align-items: center;

            .options{
                margin-top: 10px;
                width:100%;
                display: flex;
                justify-content: flex-end;


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
        width:120px;
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
        width:120px;
        height: 40px;
        font-weight: bold;
        padding: 5px 15px;
        border-radius: 7px;
        font-size: 20px;
        outline:0;
    }
}
`;

export const Edit = styled(Modal)`
  display: flex;
  justify-content: center;

  .containerModal {
    width: 500px;
    height: 300px;
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
            outline:0;

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
        font-size: 20px;
        outline:0;
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
        font-size: 20px;
        outline:0;
    }
}
`;

