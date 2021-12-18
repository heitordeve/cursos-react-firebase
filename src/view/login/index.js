import React from 'react';
import './index.css';

function Login() {
    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className='text-center mb-4'>
                    <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 class="h3 mb-3 fw-normal text-white font-weight-bold">Login</h1>
                </div>

                <input type="email" class="form-control my-2" id="floatingInput" placeholder="Digite seu e-mail" />

                <input type="password" className="form-control my-2" id="floatingPassword" placeholder="Digite Sua Senha" />

                <button className="w-100 btn btn-lg btn-login" type="submit">Entrar</button>

                <div className='msg-login text-white text-center my-2'>
                        <span><strong>Ebaaa \0/</strong> Login realizado com Sucesso! &#128526;</span>
                        <span><strong>Ops!</strong> Favor verificar e-mail e senha &#128546;</span>
                </div>

                <div className='opcoes-login mt-5 text-center'>
                    <a href='' className='mx-2'>Recuperar Senha</a>
                    <span className='text-white'>&#9733;</span>
                    <a href='' className='mx-2'>Quero Cadastrar</a>
                </div>                

            </form>
        </div>
    )
}

export default Login;