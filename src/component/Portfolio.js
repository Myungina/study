import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Worklist from './Worklist';
import $ from 'jquery';
import '../css/protfolio.css';


export default function Portfolio(){
    const [showPopup, setShowPopup ] = useState(false);
    const [datailTxt, setdatailTxt ] = useState(null);

    function detail(e){
        if(showPopup == false){
            var idx = e.target.dataset.id;   
            var total = Worklist[1].length ;            
            var target = total-idx-1;

            setdatailTxt(Worklist[1][target]);
        }              
        setShowPopup(!showPopup) ;
    }
    return(
        <div className="section">
        <Header/>
        <div className="wrap content">
            <div className="inner">
                <ul className='overhidden worklist'>
                    {Worklist[1].map((it)=>(
                        <li key={it.id} > 
                            <div className="img_wrap">                                
                                <img src={it.img } alt="port_img"/>
                                
                            </div>
                            <h4 className="title" >{it.title}</h4>
                            <p>{it.skill}</p>
                            <p>{it.company}</p>
                            <button name="detail" className="detailBtn" onClick={detail} value="false" data-id={it.id}>자세히보기</button>
                        </li>
                    ))}
                </ul>                
            </div>            
        </div>
        <Footer/>
        {showPopup ? (
        <div className="popupBg">
        <div className="popupWrap" onClick={detail}>
            <div className="popupContent">
                <div className="popupHeader">
                    <h4 className="fl title">{datailTxt.title}</h4>
                    <button className="fr popupClose"  onClick={detail}>X</button>
                </div>
                <div className="popupTxt">
                    <ul>
                        <li><b>사용스킬 : </b>{datailTxt.skill}</li>
                        <li><b>URL : </b>{datailTxt.url.map((thisUrl , index)  => (
                                    <a href={thisUrl} className="mgr10" target="_blank">View</a>
                                ))}
                        </li>
                        {datailTxt.git === '' 
                        ?<li></li>
                        :<li><b>Git : </b>{datailTxt.git}</li>
                        }
                        
                    </ul>
                    <div className="mgt15 subTxt">
                        <ul className="style_dash">
                        {datailTxt.txt.map(txtArr => (
                            <li>{txtArr}</li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        ) : null}
        </div>
    )
}