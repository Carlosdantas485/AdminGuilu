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
            width: 240px;
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
            p {
                color: #a8bc81;
                text-align: right;
                font-weight: bold;
                font-size: 20px;
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
        margin-bottom: 2rem;

        .content {
            margin-bottom: 0.5rem;
            .avatar {
                margin-right: 0rem;
            }
        }
    }
`;
