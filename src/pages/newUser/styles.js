import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;
    margin-top:40px;

    display:flex;
    justify-content:center;
    align-items: center;

    .container{
        width:560px;
        margin:0 15px;
        padding: 50px;
        background-color: #fff;
        border-radius: 18px;
        
        .logoDiv{
            display:flex;
            justify-content:center;
            align-items: center;
            img{
                width: 50%;
            }
        }
        
        h3{
            font-size: 14px;
        }

        input{   
            width: 95%; 
            height: 20px;
            padding: 5px 15px;
            border-radius: 5px ;
            border:2px solid grey;
            font-size: 15px;
            background-color:#E2EAD4;
        }

        .title{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
        }
            
    }

    

    .infosUser{
        display: flex;
        align-items: center;
        flex-wrap:wrap;
        margin-top: 30px;

        .avatar {
            width:100%;
            height: 90px;
            width:90px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 2.6rem;
            border: 5px solid #a8bc81;
            border-radius: 50%;
        }            
    }
    .nameCel{
        display: flex;
        justify-content: space-between;
        width:100%;
        .name{
            width:56%;
         }
        .cel{
            width:35%;
            margin-right: 19px;

        }
    }

    .emailCpfCnpj{
        display: flex;
        justify-content:space-between;
        width:100%;
        
        .email{
            width:58%;
            
            .edit{
                display:flex;      
            }
        }
        .CpfCnpj{
            width:40%; 
            .edit{
                display:flex;

            }
        }  
           
    }
        
    .boxCepNumberComplement{
        width:100%;
        display: flex;
        justify-content:space-between;
        
        .cep{
            width:20%;
        }

        .number{
            width:20%;
        }
        
        .complement{
            width:50%;
            margin-right: 20px;
        }
    } 
            
    .local{
        width:100%;
        display: flex;
        justify-content:space-between;
        
        .neighborhood{
            width:41%;
        }
        
        .logradouro{
            width:50%;
            margin-right: 15px;

        }
    }
    
    .boxCepNumberComplement{
        width:100%;
        display: flex;
        justify-content:space-between;
        
        .cep{
            width:20%;
        }

        .number{
            width:20%;
        }
        
        .complement{
            width:40%;
            margin-right: 20px;
        }
    } 

    .cityUf{
        width:100%;
        display: flex;
        justify-content:space-between;
        
        .city{
            width:80%;
        }
        
        .uf{
            width:70px;
            margin-top: 12px;
            font-weight: bold;
            select{
                margin-top: 15px;
                width: 70px;
                height: 30px;
            }
        }
    }
    .options{
        margin-top: 30px;

        display: flex;
        justify-content: space-between;
        
        button{
            width: 150px;
            padding: 5px;
            font-size: 22px;
            font-weight: bold;
            border-radius: 8px;
        }
        
        .back{
            background-color: #696969;
            color: white;
        }

        .back:hover{
            background-color: #4F4F4F;
            transform: scale(1.02); 
            transition: 0.3s;
        }

        .save{
           background-color: #A1BF73;
           color: white;
        }

        .save:hover{
            background-color: #84a84d;
            transform: scale(1.02); 
            transition: 0.3s;
        }
    }


        @media(max-width: 1200px){
            height:100vh;

            .container{
                margin-top:12px;
                width: 100%;
            }

            .nameCel{
                display: flex;
                flex-direction:column;
                .name{
                    width:100%;
                }
                .cel{
                    width:100%;
                }
            }

            .emailCpfCnpj{
                display: flex;
                flex-direction:column;
                
                .email{
                    width:98%;
                }

                .CpfCnpj{
                    width:98%;
                }  
                
            }

            .boxCepNumberComplement{
                width:100%;
                display: flex;
                justify-content:space-between;
                
                .cep{
                    width:20%;
                }

                .number{
                    width:20%;
                }
                
                .complement{
                    width:40%;
                    margin-right: 30px;
                }
            } 
                   
            .local{
               flex-direction:column;
                
                .neighborhood{
                    width:100%;
                }
                
                .logradouro{
                    width:100%;
                }
            }
            
            .cityUf{
                
                .city{
                    width:78%;
                }
                
                .uf{
                    width:90px;
                    margin-top: 12px;
                    font-weight: bold;
                    select{
                        margin-top: 15px;
                        width: 80px;
                        height: 30px;
                    }
                }
            }

            .options{
                button{
                    width: 100px;
                    padding: 5px;
                    font-size: 18px;
                    font-weight: bold;
                    border-radius: 8px;
                }
            }
        }

        @media(max-width: 628px){
            height:100%;
            .container{
                width: 65.5%;
            }
            .emailCpfCnpj{
                display: flex;
                flex-direction:column;
                .email{
                    width:100%;
                }

                .CpfCnpj{
                    width:100%;
                }  
            }

            .boxCepNumberComplement{
                flex-direction:column;
                
                .cep{
                    width:100%;
                }

                .number{
                    width:100%;
                }
                
                .complement{
                    width:100%;
                }
            } 

            .cityUf{
                flex-direction:column;
                .city{
                    width:100%;
                }
                
                .uf{
                    width:100px;
                    margin-top: 12px;
                    font-weight: bold;
                    select{
                        margin-top: 15px;
                        width: 80px;
                        height: 30px;
                    }
                }
            }
        }
    
           
`;
