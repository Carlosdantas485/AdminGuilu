import React, {useState} from 'react';


import { Container, Actions, AcceptedModal } from './styles';
import Logo from '../../../assets/logo.png';

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
    const [Cod, setCod] = useState('');
    const [Email, setEmail] = useState('');

    function submit(){

        if(Password !== RePassword){
            handlePasswordDiferenteShow();

            setTimeout(() => {
                handlePasswordDiferenteClose()
            }, 5000);

        }
        else if(Password.length === 0 || Cod.length === 0 || Email.length === 0 || Cod.length === 0){
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
            <Container>

                <div class="container" >
                    <div className="div-logo">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <h1>Redefinir Senha</h1>
                    <div className="confirm">
                        <h2> E-mail</h2>
                        <input type="text"
                            placeholder="E-mail"
                            value={Email}
                            onChange={(response) => setEmail(response.target.value)}/>

                        <h2>Codigo enviado para seu e-mail </h2>
                        <input type="text"
                            placeholder="Codigo"
                            value={Cod}
                            onChange={(response) => setCod(response.target.value)}/>

                        <h2> Nova senha </h2>
                        <input type="password"
                            placeholder="Nova senha"
                            value={Password}
                            onChange={(response) => setPassword(response.target.value)}/>

                        <h2> Confirme nova senha </h2>

                        <input type="password"
                            placeholder="Confirmar senha"
                            value={RePassword}
                            onChange={(response) => setRePassword(response.target.value)}/>

                        <div className="recover-btns">
                            <button className="recover" onClick={()=> submit()}>Recuperar</button>
                        </div>
                    </div>
                </div >
            </Container>

            <AcceptedModal open={showAccepted} onClose={handleAcceptedClose}>
                <div className="containerModal">
                    <p className="titleModal">Redefinir Senha </p>
                    <div className="line" />
                    <p>Gostaria de redefinir sua senha ?</p>
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
                    <p className="titleModal">Senhas Diferentes !</p>
                    <div className="line" />
                    <p>Por favor digite sua senha novamente </p>
                </div>
            </Actions>
            <Actions open={showPasswordNull} onClose={handlePasswordNullClose}>
                <div className="containerModal">
                    <p className="titleModal">Erro ao cadastrar !</p>
                    <div className="line" />
                    <p>Verifique se todos os campos estão preenchidos corretamente </p>
                </div>
            </Actions>
        </>
    );
}

export default Users;


