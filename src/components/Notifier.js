import {Container, Message} from "../styles/component.notifier";

function Notifier({message, bg, color}){
    return <Container theme={{bg, color}}>
        <Message>{message}</Message>
    </Container>
}

export default Notifier;