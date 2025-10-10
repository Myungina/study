
import { Box , List , Text , Link  ,  Card , Heading , SimpleGrid , defineAnimationStyles  , defineConfig } from "@chakra-ui/react"
import { LuExternalLink} from "react-icons/lu";
import Header from './Header';
import Footer from './Footer';
import Worklist from '../data/Worklist';


const animationStyles = defineAnimationStyles({
  bounceFadeIn: {
    value: {
      animationName: "bounce, fade-in",
      animationDuration: "1s",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
      opacity:1
    },
  },
})
const config = defineConfig({
  theme: {
    animationStyles,
  },
})
  

export default function Portfolio(defineConfig , config){    

  return(    
    <Box>
    <Header/>
    <Box layerStyle="content">
      <Box>
          <SimpleGrid mt="10" mb="10" gap="7"  templateColumns='repeat(3,1fr)'>
          {Worklist[0].map((it , idx) => (
            
            <Card.Root 
                layerStyle="cardStyle"       
                data-state="open"
                _open={{
                  animationName: "fade-in, scale-in",
                  animationDuration: idx,
                }}
                key = {idx}                
            >
              <Card.Header>
                <Heading size='md' mb="3">{idx+1}. {it.title}</Heading>
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
