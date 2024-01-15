import React, { useState , useEffect } from 'react';
import Data from "./Data.js";
import style from "../css/Content.moduls.css";
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
                                </ul>
                            </div> 
                        </td>
                    </tr>
                    <tr>
                      <td colSpan={"2"}                      >
                        <h3 className='sub_title'>Experience </h3>
                        <div className='mgb10 overhidden border_l pdl10'>
                          <div className='fl w_40'>
                            에듀라인<br></br><b>2018 ~ 2018</b>
                          </div>
                          <div className="fl w_60">
                          - 사내 상품페이지 디자인 및 퍼블리싱<br></br>
                          - 신규 사업, 이벤트 페이지 퍼블리싱
                          </div>
                        </div>
                        <div className='mgb10 overhidden border_l pdl10'>
                          <div className='fl w_40'>
                          시대고시기획<br></br><b>2019 ~ 2021</b>
                          </div>
                          <div className="fl w_60">
                          - 사내 상품페이지 퍼블리싱<br></br>
                          - 신규 사업 브랜딩페이지 구축<br></br>
                          - 사내 사이트 구조변경 및 유지보수
                          </div>
                        </div>
                        <div className='overhidden border_l pdl10'>
                          <div className='fl w_40'>
                            테이크원컴퍼니<br></br><b>2021 ~ 2023</b>
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
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}