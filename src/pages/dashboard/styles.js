import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;
    background-color:white;
    margin: 0;

    .container{
        display:flex;
        align-items: flex-end;
        flex-direction: column;
        img{
            width: 60%;
        }

        .back{
                border: none;
                box-shadow: 1px 1px 2px grey;
                width:110px;
                height: 40px;
                font-weight: bold;
                padding: 5px 15px;
                border-radius: 5px;
                font-size: 17px;
                background-color: #c4c4c4;
                color: white;

            }

            .back:hover{
                background-color: #b3b3b3;
                transition: 0.3s;
            }


`;

export const Header = styled.div`
   .container{
        #root{
            margin: 0;

        }
    }

`;
