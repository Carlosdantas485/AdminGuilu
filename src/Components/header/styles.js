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
            button {
                color: #a8bc81;
                text-align: right;
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
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 2.6rem;
            border: 5px solid #a8bc81;
            border-radius: 50%;
        }
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 190px;
        padding-top: 20px;
        margin-bottom: 2rem;

        .logo {
            img {
                margin-left:0px;
                width: 180px;
            }
        }

        .content {
            flex-direction: row-reverse;
            margin-bottom: 0.5rem;
          
            .avatar {
                margin-right: 1rem;
            }
        }
    }
`;
