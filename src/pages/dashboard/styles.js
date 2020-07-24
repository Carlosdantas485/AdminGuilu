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
            margin-top: 20px;
            width:150px;
            height: 50px;
            font-weight: bold;
            padding: 5px 15px;
            border-radius: 5px;
            border:2px solid #F5F5F5;
            font-size: 20px;
            background-color:#fff;
            color: #B8CF8C;
        }

        .back:hover{
            transition: 0.5s;
            background-color: #F5F5F5;
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
