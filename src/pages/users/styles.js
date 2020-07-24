import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;

    display: flex;
    justify-content: center;
    
    .container{
        width:100%;
        padding: 20px;
        margin: 15px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 1px 1px 2px grey;

        h1{
            color: #A8BC81;

        }

        .list{
            .user{
                background-color:#E2EAD4;
                padding:20px;
                margin-top: 10px;
                border-radius:5px;
                box-shadow: 0.3px 0.3px 1px grey;
                border: 5px double grey;


                .infoUser{
                    .headerUser{
                        display:flex;
                        align-items: flex-start;

                        .avatar {
                            height:80%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-right: 2.6rem;
                            border: 5px solid #a8bc81;
                            border-radius: 50%;
                        }
                        
                        .trash{
                            width: 100%;
                            display:flex;
                            justify-content:flex-end;

                            .icon{
                                color: black;
                                cursor:pointer;


                                &:hover{
                                    color:red;
                                }

                            }                                       
                        }

                        
                    }
                }
                
            }
        }
    }

`;
