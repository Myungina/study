import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Worklist from './Worklist';
import '../css/Popup.css';
import $ from 'jquery';
import '../css/protfolio.css';

export default function Portfolio(){
    const [showPopup, setShowPopup ] = useState(false);
    const [datailTxt, setdatailTxt ] = useState(null);
    console.log(datailTxt);
    function detail(e){
        if(showPopup == false){
            var idx = e.target.dataset.id;            
            setdatailTxt(Worklist[1][idx]);
        }                
        setShowPopup(!showPopup) ;
    }
    return(
        <div className="section">
        <Header/>
        <div className="wrap content">
            <div className="inner">
                <ul className='overhidden worklist'>
                    {Worklist[1].map((it , idx)=>(
                        <li key={it.id} > 
                            <div className="img_wrap">
                                <img src={ require('../img/no-img.png') } alt="port_img"/>
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
        <div className="popupWrap">
            <div className="popupContent">
                <div className="popupHeader">
                    <h4 className="fl title">{datailTxt.title}</h4>
                    <button className="fr popupClose"  onClick={detail}>X</button>
                </div>
                <div className="popupTxt">
                    <table>
                        <tr>
                            <th>회사명</th>
                            <td>{datailTxt.company}</td>
                        </tr>
                        <tr>
                            <th>사용스킬</th>
                            <td>{datailTxt.skill}</td>
                        </tr>
                        <tr>
                            <th>URL</th>
                            <td>
                            {datailTxt.url.map(txtArr => (
                                <a href={txtArr} className="mgr10" target="_blank">{txtArr}</a>
                            ))}
                            </td>
                        </tr>
                        <tr>
                            <th>GIT</th>
                            <td>{datailTxt.git}</td>
                        </tr>
                    </table>
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