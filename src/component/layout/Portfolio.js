import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from "../css/Content.module.scss";
import Worklist from '../data/Worklist';
import { List , Text , Link} from "@chakra-ui/react"
import { LuExternalLink } from "react-icons/lu"


export default function Portfolio(){    
  return(
    <div>
    <Header/>
    <div className={styles.inner}>
        <List.Root gap="7">
            {Worklist[0].map((it , idx) => (
              <List.Item color="pink.400">    
                    <Text fontWeight="bold" textStyle="xl">{it.title}</Text>
                    <p>사용 기술 : {it.skill}</p>
                    <p>작업 내용 : </p>
                    <List.Root ps="5">
                      {it.txt.map((txtarr , idx)=>(
                        <List.Item>{txtarr}</List.Item>
                      ))}   
                        {it.git.length > 0 
                       ?
                      <List.Item><Link  href={it.git} >Git View<LuExternalLink /></Link ></List.Item> 
                       :null
                    }                  
                    </List.Root>                    
                    
                </List.Item>
            ))}            
        </List.Root>
        
    </div>

    <Footer/>
    </div>
  )
}