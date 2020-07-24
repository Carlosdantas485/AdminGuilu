import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;

    display: flex;
    justify-content: center;
    
    .container{
        padding: 20px;
        margin: 15px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 1px 1px 2px grey;
        
        .user{
            margin:20px 0;
           

            h2{
                margin:0;
                font-size: 25px;
                color: #A8BC81;
                font-weight: bold;
            }

            h3{
                margin:0;
                font-size: 15px;
                
            }

            .infoUser{
                display:flex;
                align-items:center;
                flex-direction:column;
                
                img{
                    width: 170px;
                    margin-bottom: 20px;
                }
            }

        }
        .inputs{
            width: 100%;

            .box{
                margin-top: 10px;
                display:flex;
                flex-wrap:wrap;

                h3{
                    margin:0;
                    font-size: 13px;
                    margin-bottom: 5px;
                    color: #A1BF73;
                    font-weight: bold;
                }

                input{
                    height: 15px;
                    padding: 5px 15px;
                    border-radius: 5px ;
                    border:1px solid grey;
                    font-size: 15px;
                    background-color:#E2EAD4;
                }
                .name{
                    width: 64%;
                    margin-right:10px;
                    display:flex;
                    flex-direction:column;
                   
                }
                .cel{
                    width: 34%;
                    display:flex;
                    flex-direction:column; 
                }

                .email{
                    width: 54%;
                    margin-right:10px;
                    display:flex;
                    flex-direction:column;
                }

                .cpf{
                    width: 44%;
                    display:flex;
                    flex-direction:column;
                }

                .cep{
                    width: 26%;
                    margin-right:10px;
                    display:flex;
                    flex-direction:column;
                }

                .number{
                    width: 16%;
                    margin-right:10px;
                    display:flex;
                    flex-direction:column;

                }

                .complement{
                    width: 54.5%;
                    display:flex;
                    flex-direction:column;
                }

                .bairro{
                    width: 54%;
                    margin-right:10px;
                    display:flex;
                    flex-direction:column;
                }

                .logradouro{
                    width: 44%;
                    display:flex;
                    flex-direction:column;
                }

                .city{
                    width: 85%;
                    margin-right:10px;
                    display:flex;
                    flex-direction:column;
                }
                
                .uf{
                    display:flex;
                    flex-direction:column;

                    select{
                        margin-top:5px;
                        height: 25px;
                        width: 80px;
                    }
                }
            }
            
        }
        .options{
            margin-top: 25px;
            display: flex;
            justify-content: space-between;

            button{
                border: 1px solid grey;
            }

            .back{
                background-color: #696969;
                color: white;
                text-align:center;
                text-decoration:none;
                width: 120px;
                padding: 5px;
                font-size: 22px;
                font-weight: bold;
                border-radius: 8px;
            }

            .back:hover{
                background-color: #4F4F4F;
                transform: scale(1.02); 
                transition: 0.3s;
            }

            .save{
                background-color: #A1BF73;
                color: white;
                text-align:center;
                text-decoration:none;
                width: 120px;
                padding: 5px;
                font-size: 22px;
                font-weight: bold;
                border-radius: 8px;
            }

            .save:hover{
                background-color: #84a84d;
                transform: scale(1.02); 
                transition: 0.3s;
            }
        }
    }

    @media(max-width: 768px){
        .container{
            width:100%;
            .inputs{
                .box{
                    margin:0;
                    flex-direction:column;
                    h3{
                        margin-top:10px;
                    }
                    
                    .name{
                    width: 100%;
                    
                   
                    }
                    .cel{
                        width: 100%;
                    }

                    .email{
                        width: 100%;
                       
                    }

                    .cpf{
                        width: 100%;
                        
                    }

                    .cep{
                        width: 100%;
                    }

                    .number{
                        width: 100%;

                    }

                    .complement{
                        width: 100%;
                    }

                    .bairro{
                        width: 100%;
                    }

                    .logradouro{
                        width: 100%;
                    }

                    .city{
                        width: 100%;
                    }

                    .uf{
                        margin-top:10px;
                    }
                    
                }
               
            } 
        }  
        
    }
`;
