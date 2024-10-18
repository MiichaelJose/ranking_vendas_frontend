import { useState } from "react";
import { useNavigate } from "react-router-dom";

import login from "../../shared/services/Auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = await login({ email, password });

    if (data instanceof Object) {
      navigate("/conversao-venda");
    }
  };

  return (
    <div className="flex w-full">
      <div className="bg-black bg-[url('https://app.rankingdevendas.com.br/static/media/login-1.23d5039864bf74200eed.jpg')] bg-cover bg-no-repeat bg-[inherit] flex-1 transition duration-1000"></div>
      <div className="h-screen w-[400px] bg-[rgb(29,28,65)] text-white flex justify-center items-center flex-col">
        <section className="h-full w-[85%] max-h-[350px] flex flex-col justify-between">
          <div className='border-b border-white/15 pb-4 pb-14"'>
            <h1 className="text-2xl">Bem-vindo</h1>
            <p className="mt-5 text-gray-400">
              Ainda não tem uma conta ?{" "}
              <span className="text-white underline">Cadastre-se agora</span>
            </p>
          </div>
          <form className="flex flex-col">
            <label htmlFor="e-mai" className="inline-block mt-5">
              E-mail
            </label>
            <input
              className="w-full h-10 rounded-md mt-1 pl-2  "
              type="text"
              name="e-mail"
              id="e-mail"
              placeholder="ex: mai@domain.oom"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="inline-block mt-5">
              Senha
            </label>
            <input
              className="w-full h-10 rounded-md mt-1 pl-2"
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="text-right text-sm mt-1.5 text-gray-400">
              Esqueceu a sua senha? <span className="text-white underline">Clique aqui</span>
            </p>

            <button
              className="h-10 rounded-md bg-yellow-400 text-white mt-5"
              type="button"
              onClick={handleSubmit}
            >
              Entrar Agora
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
