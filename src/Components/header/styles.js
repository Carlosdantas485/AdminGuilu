import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background: #fff;

    .logo {
        img {
            margin-left:50px;
            width: 160px;
            height: auto;
        }
    }

    .content {
        display: flex;
        align-items: center;

        .infoDiv {
            display: flex;
            flex-direction: column;
            align-items: right;
            margin-right: 1rem;
            .nameUser {
                display:flex;
                justify-content:flex-end;
                color: #a8bc81;
                font-weight: bold;
                font-size: 20px;
                border:none;
                background:transparent;
            }

            .email {
                font-weight: normal;
                font-size: 15px;
                color: #898989;
            }
        }
        .avatar {
            width:52px;
            height:52px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.6rem;
            border: 5px solid #a8bc81;
            border-radius: 50%;
        }
        .exit1{
            width:40px;
            height:15px;
            background-color: #ff5758;
            padding: 8px 10px;
            margin-right:.6rem;
            box-shadow: 1px 1px 2px grey;


            display: flex;
            justify-content: center;
            align-items: center;

        }
    }
    .exit2{
        display: none;
    }

    @media (max-width: 768px) {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        height: 190px;
        padding-top: 20px;

        .exit2{
            width:80px;
            height:20px;
            background-color:#ff5758;
            padding: 8px 10px;
            border-radius:5px;
            margin-right:.6rem;
            box-shadow: 1px 1px 2px grey;

            display: flex;
            justify-content: center;
            align-items: center;

        }

        .logo {
            img {
                margin:10px 0px;
                width: 180px;
            }
        }

        .content {
            flex-direction: row-reverse;
            margin-bottom: 0.5rem;


            .infoDiv {
                margin:0;
                .nameUser {
                    justify-content:flex-start;
                }
            }
            .avatar {
                margin-right: 1rem;
            }

            .exit1{
                display: none;
            }
        }
    }
`;
