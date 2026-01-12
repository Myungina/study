import { Box , List , Text , Link  ,  Card , Heading , SimpleGrid} from "@chakra-ui/react"
import Header from './Header';
import Footer from './Footer';

const Jsmodule = () =>{
    return(
        <Box layerStyle="section">
        <Header/>
        <Box layerStyle="content">
            <Box bg="contentBg">
                
            </Box>
        </Box>
        <Footer/>
        </Box>
    )
}

export default Jsmodule;