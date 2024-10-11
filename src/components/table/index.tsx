import { Container, Tables } from "./styles";

export default function Table({ orders }: any) {
    console.log(orders);
    
    return(
        <Container>
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
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
            </Tables>
        </Container>
    )
}