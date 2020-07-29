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
        button{
            margin-top:30px;
            border: none;
            box-shadow: 1px 1px 2px grey;
            width:150px;
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
    }

    @media(max-width: 1200px){
        .container{
            img{
                width: 96%;
            }

        }
    }
`;
