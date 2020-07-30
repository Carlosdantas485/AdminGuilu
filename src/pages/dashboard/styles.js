import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;
    margin-top: 40px;

    .container{
        display:flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        img{
            width: 60%;
        }

        .back{
                margin-top:20px;
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

    @media(max-width: 1200px){
        .container{
            img{
                width: 96%;
            }

        }
    }
`;
