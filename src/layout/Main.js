import { Box } from "@chakra-ui/react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


export default function Main(){
    return(
        <Box layerStyle="section">
            <Header/>
            <Content/>
            <Footer/>
        </Box>
    )
}