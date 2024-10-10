import Header from '../header'
import { Container } from './styles'

export default function ContainerPage({ children }: any) {
    return (
        <Container>
            <Header/>
        </Container>
    )
}