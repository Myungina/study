import React, { useState , useEffect } from 'react';
import Data from "./Data.js";
import "../css/Content.moduls.css";
import ProfileImg from "../img/profile_img.png";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Legend,
  );
  
export const options = {
  responsive:true,
  maintainAspectRatio: false, 
  plugins: {
    legend: {
      position: 'top',
    },
    scales: {
      y: {
          ticks: {
              beginAtZero:true,               
          }
      },
    }   
  }  
};

const labels = Data[1].map((val) => {
                return val.skill;
              });
export const data = {
  labels,
  datasets: [
    {
      label:'Level',
      data: Data[1].map((val) => {
            return val.level;
          }),
      barThickness: 20,
      borderColor: '#e898ab',
      backgroundColor: '#f7c5d1',
    },
  ],
};
export default function Content(){
    let [items] = useState(Data);
    
    return(
        <div className="wrap content">
            <div className="inner">
                <table className="table_wrap w_60">
                    <tbody>
                    <tr>
                        <td className='w_40'>
                            <div className="fl mgr20">
                                <img src={ProfileImg} alt='profile_img'/>
                            </div>
                        </td>
                        <td>
                            <div className="fl tl">
                                <ul className="list-dot">
                                    <li>{items[0].name}</li>
                                    <li>{items[0].birthday}</li>
                                    <li>{items[0].mail}</li>
                                    <li>{items[0].ph}</li>
                                    <li>{items[0].ex}</li>
                                </ul>
                            </div> 
                        </td>
                    </tr>
                    <tr>
                      <td colSpan={"2"}                      >
                        <div className="overhidden">
                          <h3 className='fl sub_title mgt0'>Experience </h3>
                          <a href="https://sky-soprano-139.notion.site/Experience-e94e238fe03b460fb85cd97a20da0adf?pvs=4" target='_blank' className="fr txt_point">경력 기술서</a> 
                        </div>
                        
                        <div className='mgt20 mgb20 overhidden border_l pdl10'>
                          <div className='fl w_40'>
                            <b>에듀라인</b><br></br><i>2018 ~ 2018</i>
                          </div>
                          <div className="fl w_60">
                          - 사내 상품페이지 디자인 및 퍼블리싱<br></br>
                          - 신규 사업, 이벤트 페이지 퍼블리싱
                          </div>
                        </div>
                        <div className='mgb20 overhidden border_l pdl10'>
                          <div className='fl w_40'>
                          <b>시대고시기획</b><br></br><i>2019 ~ 2021</i>
                          </div>
                          <div className="fl w_60">
                          - 사내 상품페이지 퍼블리싱<br></br>
                          - 신규 사업 브랜딩페이지 구축<br></br>
                          - 사내 사이트 구조변경 및 유지보수
                          </div>
                        </div>
                        <div className='overhidden border_l pdl10'>
                          <div className='fl w_40'>
                            <b>테이크원컴퍼니</b><br></br><i>2021 ~ 2023</i>
                          </div>
                          <div className="fl w_60">
                          - 신규사업 브랜딩페이지 구축<br></br>
                          - CMS 유지보수 및 기능 추가<br></br>
                          - 스크립트 모듈화
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <h3 className='sub_title'>Skill Chart</h3>
                            <div style={{textAlign:"center"}}>
                            <Bar options={options} data={data}/>
                            </div>
                            <p className='mgt20'>
                             <b>and : </b>  ajax , restAPI , Mysql , 
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}