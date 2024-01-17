import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Worklist from './Worklist';
import $ from 'jquery';
import '../css/protfolio.css';

export default function Portfolio(){
    function detail(e){
        console.log(e.target.children)
    }
    return(
        <div className="section">
        <Header/>
        <div className="wrap content">
            <div className="inner">
                <ul className='overhidden worklist'>
                    {Worklist[1].map((it)=>(
                        <li className="" onClick={detail}> 
                            <h4 className="title">{it.title}</h4>
                            <p>{it.skill}</p>
                            <div className="info_wrap">
                                <p>{it.discription}</p>
                                
                            </div>
                        </li>
                    ))}
                </ul>                
            </div>
        </div>
        <Footer/>
        </div>
    )
}