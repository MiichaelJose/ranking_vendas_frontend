import ContainerPage from "../../components/container-page";
import Header from "../../components/header";
import NavSalesConversation from "../../components/nav-sales-conversation";
import { Tables, BackgroundTable } from "./styles";

export default function Home() {
    return (
        <ContainerPage>
            <Header/>
            <NavSalesConversation />

            <BackgroundTable>
                <Tables striped bordered hover size="sm" className="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Produto</th>
                        <th>Status Pgto</th>
                        <th>Observação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
                </Tables>
            </BackgroundTable>
        </ContainerPage>
    )
}