import { useState } from 'react';
import { Container, SectionLogin, SectionImage } from './styles';
import { useNavigate } from 'react-router-dom';
import login from '../../services/Auth';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const data = await login({ email, password });
        
        if(data instanceof Object) {
            navigate("/conversao-venda");
        }
    }

    return (
        <Container>  
            <SectionImage/>
            <SectionLogin>
                <section>
                    <div>
                        <h1>Bem-vindo</h1>
                        <p >Ainda não tem uma conta ? <span>Cadastre-se agora</span></p>
                    </div>
                    <form>
                        <label htmlFor="e-mai">E-mail</label>
                        <input type="text" name="e-mail" id="e-mail" placeholder='ex: mai@domain.oom' value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value)}/>

                        <p>Esqueceu a sua senha? <span>Clique aqui</span></p>

                        <button type='button' onClick={handleSubmit}>Entrar Agora</button>
                    </form>
                </section>
            </SectionLogin>
        </Container>
    )
}