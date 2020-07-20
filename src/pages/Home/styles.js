import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height:100%;
    margin-top: 40px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .box{
        width: 330px;
        height: 610px;
        padding: 5px 25px;
        border-radius: 20px;
        background-color:white;
        margin: 15px;
        box-shadow: 1px 1px 8px grey;

        h1{
            font-size: 35px;
            text-align: center;
            color: #A8BC81;
            margin-bottom: 45px;
        }

        .Option_Home{
            padding: 0.5px 25px;
            margin-top: 10px;
            border-radius: 25px;
            background-color: #E2EAD4;
            height: 100px;

            h2{
                margin: 0;
                margin-top: 20px;
                font-size: 18px;
                color: #636363;
            }

            p{
                margin: 0;

                font-size: 15px;
                color: #7B7D78;
            }
        }
        .Option_Home:hover{
            background-color: #c2ceab;
            cursor: pointer;
            transition: 0.3s;
        }
    }
`;
