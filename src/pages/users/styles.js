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
            margin:0;
            padding:0;
            color: #A8BC81; 
        }

        .list{
            .user{
                margin-top: 20px;
                padding:10px ;
                margin-top: 20px 0;
                border:3px double grey;
                border-radius:5px;
                background-color:#E2EAD4;
               .headerUser{
                    display:flex;
                    justify-content:space-between;
                    flex-wrap:wrap;

                    h2{
                        background-color:#fff;
                        padding: 8px;
                        border-radius:20px 0 0 20px;
                        border:1px solid grey;
                        font-size: 20px;
                    }
                    h3{
                        background-color:#fff;
                        padding: 8px;
                        border-radius:20px 0 0 20px;
                        border:1px solid grey;
                        font-size: 20px;
                    }
                    .infoUser{
                        display: flex;

                        .boxInfo{
                            height:100%;

                            display:flex;
                            align-items: center;
                            margin-right:20px;

                            .edit{
                                border-radius:5px;
                                height:41px;
                                width:70px;
                                font-weight: bold;
                                border-radius: 0 20px 20px 0;
                                padding: 5px 5px;
                                border:1px solid grey;

                            }
                        }
                    }
                   .options{
                       display:flex;
                       #pen{
                           margin-right:10px;
                       }
                       .icon{
                           color:#A8BC81;
                           background-color:#fff;
                           padding: 5px;
                           border-radius:5px;

                           &:hover{
                               color: red;
                               cursor: pointer;
                           }
                       }
                   }
               }

            }
        }
    }
    @media(max-width: 768px){
        .container{
        width:100%;
        padding: 20px;
        margin: 15px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 1px 1px 2px grey;

        h1{
            margin:0;
            padding:0;
            color: #A8BC81; 
        }

        .list{
            .user{
                margin-top: 20px;
                padding:10px ;
                margin-top: 20px ;
                border:3px double grey;
                border-radius:5px;
                background-color:#E2EAD4;
               .headerUser{
                    display:flex;
                    justify-content:space-between;
                    flex-wrap:wrap;

                    h2{
                        width:100%;
                        background-color:#fff;
                        padding: 8px;
                        border-radius:20px 0 0 20px;
                        border:1px solid grey;
                        font-size: 10px;
                    }
                    h3{
                        width:100%;
                        background-color:#fff;
                        padding: 8px;
                        border-radius:20px 0 0 20px;
                        border:1px solid grey;
                        font-size: 10px;
                    }
                    .infoUser{
                        width:100%;
                        display: flex;
                        flex-direction: column;

                        .boxInfo{

                            display:flex;
                            align-items: center;
                            margin-right:0px;

                            .edit{
                                border-radius:5px;
                                height:29px;
                                width:70px;
                                font-weight: bold;
                                border-radius: 0 20px 20px 0;
                                padding: 5px 5px;
                                border:1px solid grey;
                            }
                        }
                    }
                   .options{
                    width:100%;

                       display:flex;
                       margin-top: 10px;
                       justify-content: flex-end;
                       #pen{
                           margin-right:10px;
                       }
                       .icon{

                           display:flex;
                           color:#A8BC81;
                           background-color:#fff;
                           padding: 5px;
                           border-radius:5px;

                           &:hover{
                               color: red;
                               cursor: pointer;
                           }
                       }
                   }
               }

            }
        }
    }
    }
    
    
`;
