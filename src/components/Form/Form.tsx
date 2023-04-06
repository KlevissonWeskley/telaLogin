import { useState } from "react"

export function Form() {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    function login() {
        if(emailValue === '' || passwordValue === ''){
            alert('Digite seu e-mail e senha!')
        } else {
            alert('Login feito com sucesso!')
        }

        setEmailValue('')
        setPasswordValue('')
    }

    return (
        <section className='ml-28 mt-10'>
            <header>
                <h2 className='text-3xl font-bold text-gray-500'>
                    Acesse a plataforma
                </h2>
                <p className='text-gray-400 text-1xl max-w-40 mt-6 mb-8'>
                    Faça login ou registre-se para começar a construir seus <br /> projetos ainda hoje.
                </p>
            </header>

            <form className='flex flex-col'>
                <label className='font-semibold'>E-mail</label>
                <input type="email" 
                       placeholder="Digite seu e-mail"
                       className='w-24 h-3.5 p-2 focus: outline-none'
                       value={emailValue}
                       onChange={(e) => setEmailValue(e.target.value)}
                />

                <div className='flex gap-x-13 mt-2'>
                    <label className='font-semibold'>Senha</label>
                    <a href="" className='text-purple font-semibold'>Esqueceu a senha?</a>
                </div>
                <input type="password" 
                       placeholder="Digite sua senha"
                       className='w-24 h-3.5 p-2 focus: outline-none'
                       value={passwordValue}
                       onChange={(e) => setPasswordValue(e.target.value)}
                />

                <button onClick={login} 
                        className='bg-purple mt-8 mb-8 w-24 h-3.5 text-gray-100 rounded-md hover:opacity-80 transition duration-300'>
                    Entrar
                </button>

                <div>
                    Ainda não tem uma conta? <a href="" className='text-purple font-bold'>Inscreva-se</a>
                </div>
            </form>
        </section>
    )
}