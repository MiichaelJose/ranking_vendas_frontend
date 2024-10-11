import { Container, Profile, LinkPage, Desktop, Mobile } from "./styles";
import seta from "../../assets/seta.png"

import Form from 'react-bootstrap/Form';


export default function Header() {
    return (
        <Container>
            <Mobile>
                <div>
                    <h5>Lista</h5>
                    <Form.Select aria-label="2" size="sm" >
                        <option value="1">conversao de vendas</option>
                        <option value="2" defaultChecked>Two</option>
                    </Form.Select>
                    {/* <div>
                        <p>conversao de vendas</p>
                        <img src={seta} alt="" />
                    </div> */}
                </div>

                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50"><path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"/></svg>
            </Mobile>
            <Desktop>
                <LinkPage>
                    <p>ranking de vendas</p>
                    <p>conversao de vendas</p>
                </LinkPage>

                <Profile>
                    <div></div>
                    <div>
                        <img src="https://app.rankingdevendas.com.br/static/media/default_user.735cd2559a35bc9ffb72.png" alt="" />
                        <p>name</p>
                    </div>
                </Profile>
            </Desktop>
        </Container>
    )
}