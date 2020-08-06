import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;

    display: flex;
    justify-content: center;


    .link{
        width: 100%;
        text-decoration:none;
        text-align:center;

        .icon-info{
            width: 100%;
            display:flex;
            justify-content: flex-end;
        }

    }

    .container{
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .box{
        width: 300px;
        height: 510px;
        padding: 5px 30px;
        background-color:#fff;
        border: 2px solid white;
        margin:15px;
        box-shadow: 1px 1px 2px grey;

        display: flex;
        align-items: center;
        flex-direction:column;


        h1{
            font-size: 35px;
            text-align: center;
            color: #A8BC81;
            margin-bottom: 45px;
        }

        .Option_Home{
            box-shadow: 1px 1px 2px grey;
            width: 280px;
            height: 80px;
            padding: 1px 25px;
            margin-top: 10px;
            background-color: #E2EAD4;
            transition: 0.3s;

            .info-box{
                width:100%;
                display:none;
                justify-content:center;
            }

            h2{
                margin: 5px;
                margin-top: 20px;
                font-size: 18px;
                color: #636363;
                text-decoration:none;

            }

            p{
                margin: 0;
                font-size: 15px;
                color: #7B7D78;
                text-decoration:none;

            }
        }
        .Option_Home:hover{
            width: 280px;
            height: 100px;
            cursor: pointer;
            transition: 0.5s;
            border:2px #A8BC81 solid;

            .info-box{
                display:flex;
            }
        }

    }


    @media(max-width: 1200px){
        .box{
            width: 100%;

            .Option_Home{
                width: 90%;

                display: flex;
                align-items: center;
                flex-direction:column;

                .info-box{
                    display:flex;
                }
            }


        }

         #dashboard,#archive{
            height:26%;
        }

    }


`;
