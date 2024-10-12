import ContainerPage from "../../components/container-page";
import Header from "../../components/header";
import NavSalesConversation from "../../components/nav-sales-conversation";
import TableData from "../../components/table";


export default function Home() {
    return (
        <ContainerPage>
            <Header/>
            <NavSalesConversation />
            <TableData orders={{data:"oi"}}/>
        </ContainerPage>
    )
}