import { useContext } from "react";
import {Container, Text, Button} from "../styles/pages.404";

import { Helmet } from "react-helmet";

import dataContext from "../utils/dataContext";

function NotFound(){
    const {state: {darkTheme: theme}} = useContext(dataContext);
    return <>
    <Helmet>
        <title>Ops..404</title>
    </Helmet>
    <Container theme={theme ? "dark" : "light"}>
        <Text>😱<br />I'm Lost! </Text>
        <Button to={"/"}>Take me away</Button>
    </Container>
    </>
}

export default NotFound;