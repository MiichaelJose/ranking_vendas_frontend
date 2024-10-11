import ContainerPage from "../../components/container-page";
import Header from "../../components/header";
import Table from "../../components/table";
import NavSalesConversation from "../../components/nav-sales-conversation";


export default function Home() {
    return (
        <ContainerPage>
            <Header/>
            <NavSalesConversation />
            <Table orders={{data:"oi"}}/>
        </ContainerPage>
    )
}