import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from "../css/Content.module.css";
import Worklist from '../data/Worklist';


export default function Portfolio(){    
  return(
    <div>
    <Header/>
    <div className={styles.inner}>
        <ul>
            {Worklist[0].map((it , idx) => (
                <li key={it.id} class={styles.workli}>
                    <h4>{idx+1}. {it.title}</h4>
                    <p>사용 기술 : {it.skill}</p>
                    <p>작업 내용 : {it.discription}</p>
                    {it.git.length > 0 
                       ?<a href={it.git} target="_blank" className={styles.linkBtn}>Git View</a>
                       :null
                    }
                </li>
            ))}
            
        </ul>
        
    </div>

    <Footer/>
    </div>
  )
}