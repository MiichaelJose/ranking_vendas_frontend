import { Container, Profile } from "./styles";

export default function Header() {
    return (
        <Container>
            <div>
                <p>ranking de vendas</p>
                <p>conversao de vendas</p>
            </div>

            <Profile>
                <img src="https://app.rankingdevendas.com.br/static/media/default_user.735cd2559a35bc9ffb72.png" alt="" />
            </Profile>
        </Container>
    )
}