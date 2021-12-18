import React, { useState } from 'react';
import firebase from '../../config/firebase';
import './index.css';

//import firebase from '../../config/firebase';
//import 'firebase/auth';

function NewRegister() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msgType, setMsgType] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState('');

    function register() {

        setLoading(1);

        setMsgType(null);

        if (!email || !password) {
            setMsgType('erro')
            setMsg('Campo de E-mail ou Senha vazios!')
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password).then(result => {
            setLoading(0);
            setMsgType('sucesso')
        }).catch(erro => {
            setLoading(0);
            setMsgType('erro')
            switch(erro.message)
            {
            case 'Password should be at least 6 characters':
                setMsg('A senha deve ter pelo menos 6 caracteres!');
                break;
            case 'The email address is already in use by another account.':
                setMsg('Este e-mail já está sendo usado por outro usuário!');
                break;
            case 'The email address is badly formatted.':
                setMsg('O formato de e-mail está incorreto! Exemplo: h@teste.com');
                break;
            default:
                setMsg('Não foi realizar o cadastro! Tente novamente');
                break;
            }
        });
    }

    return (
        <div className='form-register'>
            <form className='text-center form-login mx-auto mt-5'>
                <h1 className='h3 mb-3 text-black font-weight-bold'>Cadastre-se</h1>

                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder='Digite seu e-mail' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control my-2" placeholder='Digite sua senha' />

                {
                    loading ? <div className='spinner-border text-danger' role='status'><span className='sr-only'></span></div>
                    : <button onClick={register} type="button" className='btn btn-lg btn-block mt-3 mb-5 btn-register'>Cadastrar</button>
                }
                
                <div className='msg-login text-black text-center my-2'>
                    {msgType === 'sucesso' && <span><strong>Ebaaa \0/</strong> Usuário cadastradoo com Sucesso! &#128526;</span>}

                    {msgType === 'erro' && <span><strong>Ops!</strong> {msg} &#128546;</span>}
                </div>
            </form>
        </div>
    )
}

export default NewRegister;