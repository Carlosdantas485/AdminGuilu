import React, {useState} from 'react';
import { Container, Actions } from './styles';
import Header from '../../Components/header';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


function Users() {
    document.title = "Guilu - Cadastrar Usuário";

    const [showDelete, setShowDelete] = useState(false);
    const handleDeleteShow = () => setShowDelete(true);
    const handleDeleteClose = () => setShowDelete(false);

    const [showPasswordDiferente, setShowPasswordDiferente] = useState(false);
    const handlePasswordDiferenteShow = () => {
        setShowPasswordDiferente(true);
    }
    const handlePasswordDiferenteClose = () => setShowPasswordDiferente(false);

    const [showPasswordNull, setShowPasswordNull] = useState(false);
    const handlePasswordNullShow = () => setShowPasswordNull(true);
    const handlePasswordNullClose = () => setShowPasswordNull(false);

    const [Password, setPassword] = useState('');
    const [RePassword, setRePassword] = useState('');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');

    const [validat, setValidat] = useState(false);
    const validatred = () =>  setValidat(false);
    const validatgreen = () => setValidat(true);

    function submit(){

        if(Password != RePassword){
            handlePasswordDiferenteShow();

            setTimeout(() => {
                handlePasswordDiferenteClose()
            }, 5000);

        }
        else if(Password.length == 0 || Name.length == 0 || Email.length == 0){
            handlePasswordNullShow();

            setTimeout(() => {
                handlePasswordNullClose()
            }, 5000);
        }
        else{
            handleDeleteShow();
        }
    }
    return (
        <>
            <Header><div></div></Header>

            <Container>
                <div className="container">
                    <div className="Company">
                        <div className="infoCompany">
                            <img clasName="logo" src={Logo}/>
                            <h2>Cadastrar Novo Usuário</h2>
                        </div>
                    </div>

                    <div className="inputs">
                        <div className="box">
                            <div className="user">
                                <h3>Usuário</h3>
                                <input type="text"
                                    value={Name}
                                    onChange={(response) => setName(response.target.value)}
                                    placeholder=" Nome do usuários"
                                    required>
                                </input>
                            </div>
                        </div>

                        <div className="box">
                            <div className="email">
                                <h3>E-mail</h3>
                                <input type="email"
                                    value={Email}
                                    onChange={(response) => setEmail(response.target.value)}
                                    placeholder=" E-mail"
                                    required
                                />

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
                                <input type="password"
                                 value={RePassword} onChange={(response) => setRePassword(response.target.value)}
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


        <Actions  open={showDelete} onClose={handleDeleteClose}>
            <div className="containerModal">
                <p className="titleModal">Cadastrar Usuário</p>
                <div className="line" />
                <p>Gostaria de cadastrar esta usuário ?</p>
                <div className="group">
                <button
                    type="button"
                    className="back"
                    onClick={()=>handleDeleteClose()}
                >
                    Não
                </button>
                <button
                    type="submit"
                    className="send"
                    onClick={()=>handleDeleteClose()}
                >
                    Sim
                </button>
                </div>
            </div>
        </Actions>
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
