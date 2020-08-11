import React, {useState} from 'react';


import { Container, Actions, AcceptedModal } from './styles';
import Header from '../../Components/header';
import { Link } from 'react-router-dom';

function Users() {
    document.title = "Guilu - Cadastrar Empresa";

    const [showAccepted, setShowAccepted] = useState(false);
    const handleAcceptedShow = () => setShowAccepted(true);
    const handleAcceptedClose = () => setShowAccepted(false);

    const [showPasswordDiferente, setShowPasswordDiferente] = useState(false);
    const handlePasswordDiferenteShow = () => {setShowPasswordDiferente(true);};
    const handlePasswordDiferenteClose = () => setShowPasswordDiferente(false);

    const [showPasswordNull, setShowPasswordNull] = useState(false);
    const handlePasswordNullShow = () => setShowPasswordNull(true);
    const handlePasswordNullClose = () => setShowPasswordNull(false);


    const [Password, setPassword] = useState('');
    const [RePassword, setRePassword] = useState('');
    const [NameCompany, setNameCompany] = useState('');
    const [NameUser, setNameUser] = useState('');
    const [EmailCompany, setEmailCompany] = useState('');

    function submit(){

        if(Password !== RePassword){
            handlePasswordDiferenteShow();

            setTimeout(() => {
                handlePasswordDiferenteClose()
            }, 5000);

        }
        else if(Password.length === 0 || NameCompany.length === 0 || EmailCompany.length === 0 || NameUser.length === 0){
            handlePasswordNullShow();

            setTimeout(() => {
                handlePasswordNullClose()
            }, 5000);
        }
        else{
            handleAcceptedShow();
        }
    }
    return (
        <>
            <Header><div></div></Header>

            <Container>
                <div className="container">
                    <div className="Company">
                        <div className="infoCompany">
                            <h2>Cadastrar Nova Empresa</h2>
                        </div>
                    </div>

                    <div className="inputs">
                        <div className="box">
                            <div className="name">
                                <h3>Nome Da Empresa</h3>
                                <input type="text"
                                 value={NameCompany}
                                 onChange={(response) => setNameCompany(response.target.value)}
                                 placeholder=" Nome da empresa"
                                  required></input>
                            </div>
                            <div className="user">
                                <h3>Usuário</h3>
                                <input type="text"
                                 value={NameUser}
                                 onChange={(response) => setNameUser(response.target.value)}
                                 placeholder=" Nome do usuários"
                                  required></input>
                            </div>
                        </div>

                        <div className="box">
                            <div className="email">
                                <h3>E-mail</h3>
                                <input type="text"
                                 value={EmailCompany}
                                 onChange={(response) => setEmailCompany(response.target.value)}
                                 placeholder=" E-mail"
                                  required></input>
                            </div>
                        </div>

                        <div className="box">
                            <div className="password">
                                <h3>Senha</h3>
                                <input type="password"
                                    value={Password}
                                    onChange={(response) => setPassword(response.target.value)}
                                    placeholder=" Senha"
                                    required
                                />
                            </div>
                            <div className="confirm">
                                <h3>Confirmar Senha</h3>
                                <input type="password" id="Valid"
                                value={RePassword}
                                onChange={(response) => setRePassword(response.target.value)}
                                placeholder=" Confirmar senha"
                                required></input>
                            </div>
                        </div>
                    </div>
                    <div className="options">
                        <Link to="/home">
                            <button className="back">Voltar</button>
                        </Link>
                            <button className="save" onClick={()=> submit()}>Cadastrar</button>
                    </div>
                </div>
            </Container>


        <AcceptedModal open={showAccepted} onClose={handleAcceptedClose}>
            <div className="containerModal">
                <p className="titleModal">Cadastrar Empresa</p>
                <div className="line" />
                <p>Gostaria de cadastrar esta empresa ?</p>
                <div className="group">
                <button
                    type="button"
                    className="back"
                    onClick={()=>handleAcceptedClose()}
                >
                    Não
                </button>
                <button
                    type="submit"
                    className="send"
                    onClick={()=>handleAcceptedClose()}
                >
                    Sim
                </button>
                </div>
            </div>
        </AcceptedModal>
        <Actions open={showPasswordDiferente} onClose={handlePasswordDiferenteClose}>
            <div className="containerModal">
                <p className="titleModal">Senhas Diferentes</p>
                <div className="line" />
                <p>Por favor digite sua senha novamente !</p>
            </div>
        </Actions>
        <Actions open={showPasswordNull} onClose={handlePasswordNullClose}>
            <div className="containerModal">
                <p className="titleModal">Erro ao cadastrar</p>
                <div className="line" />
                <p>Verifique se todos os campos estão preenchidos corretamente</p>
            </div>
        </Actions>
        </>
    );
}

export default Users;
