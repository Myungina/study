
import { Box , List , Text , Link  ,  Card , Heading , SimpleGrid} from "@chakra-ui/react"
import { LuExternalLink} from "react-icons/lu";
import Header from './Header';
import Footer from './Footer';
import Worklist from '../data/Worklist';

  

export default function Portfolio(){    

  return(    
    <Box layerStyle="section">
    <Header/>
    <Box layerStyle="content">
      <Box>
          <SimpleGrid
            gap="7"
            templateColumns={[
              'repeat(1, 1fr)',  // 모바일
              'repeat(2, 1fr)',  // 태블릿
              'repeat(3, 1fr)'   // 데스크탑
            ]}
>

          {Worklist[0].map((it , idx) => (
            
            <Card.Root 
                layerStyle="cardStyle"       
                key = {idx}                
            >
              <Card.Header>
                <Heading fontWeight="600" size='md' mb="3">{idx+1}. {it.title}</Heading>
              </Card.Header>
              <Card.Body>
                <Text as='p'>사용 기술 : {it.skill}</Text>
                <Text as='p' mt="1">작업 내용 : </Text>
                <List.Root  ps="5">
                {it.txt.map((txtarr)=>(
                    <List.Item wordBreak="keep-all">{txtarr}</List.Item>
                ))}   
                </List.Root>
              </Card.Body>
              <Card.Footer paddingTop="0.7rem">          
                    {it.git.length > 0 ?<Link background="pink.300"href={it.git} rightIcon={<LuExternalLink/>} color="white" padding="0.1rem 0.3rem">Git View</Link >:null }   
              </Card.Footer>
            </Card.Root>
          ))}  
          </SimpleGrid>
        </Box>
      </Box>
    <Footer/>
    </Box>
  )
}
