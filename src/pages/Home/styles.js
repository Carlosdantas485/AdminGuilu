import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;

    display: flex;
    justify-content: center;

    .link{
        text-decoration:none;
        text-align:center;
    }

    .container{
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .box{
        width: 300px;
        height: 610px;
        padding: 5px 30px;
        border-radius: 10px;
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
            width: 280px;
            height: 100px;
            padding: 0.5px 25px;
            margin-top: 10px;
            border-radius: 18px;
            background-color: #E2EAD4;
            border:2px solid #E2EAD4;

            .logo{
                width: 100px;
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
            cursor: pointer;
            transition: 0.5s;
            border:2px #A8BC81 solid;
        }

    }

    .logo_guilu_box{
        width: 100%;
        display:flex;
        justify-content: flex-end;

        .logo_guilu{
            height: 100px;
            margin-right: 80px;
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
            }

        }

         #dashboard,#archive{
            height:27%;
        }

    }


`;
