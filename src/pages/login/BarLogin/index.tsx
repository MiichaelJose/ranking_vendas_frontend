import { Container } from './styles.tsx'

export default function BarLogin() {
    return (
        <Container>
            <div>
                <div className='section-btn-register'>
                    <h1>Bem-vindo</h1>
                    <p>Ainda não tem uma conta ? <span>Cadastre-se agora</span></p>
                </div>
                <div className='form'>
                    <label htmlFor="">E-mail</label>
                    <input type="text" name="E-mail" id="" placeholder='ex: mai@domain.oom'/>
                    <label htmlFor="">Senha</label>
                    <input type="password" name="password" id="" placeholder='*****'/>
                    <p>Esqueceu a sua senha? <span>Clique aqui</span></p>
                </div>
                <button>Entrar Agora</button>
            </div>
        </Container>
    )
}