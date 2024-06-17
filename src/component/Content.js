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

const labels = Data[0].map((val) => {
                return val.skill;
              });
export const data = {
  labels,
  datasets: [
    {
      label:'Level',
      data: Data[0].map((val) => {
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
                                <p>
                                그누보드 기반의 홈페이지 유지 보수 및 신규 사이트 구축을 주로 담당하였고, Ajax를 이용한 게시판 리뉴얼과 웹뷰 기반의 모바일 홈페이지 구축 경험이 있습니다.<br/>
                                node기반의 CMS 유지 보수를 담당하였으며, restAPI 통신을 이용한 게시판 구축 및 관련 스크립트 모듈화 프로젝트도 진행하였습니다.<br/>
                                다양한 프로젝트를 경험하면서 팀원들과의 소통을 중요시 여기게 되었고, 프로젝트가 종료된 후에도 유지 보수를 진행하는 노력형 개발자입니다.
                                </p>
                            </div> 
                        </td>
                    </tr>
                    <tr>
                      <td colSpan={"2"}                      >
                        <div className="overhidden">
                          <h3 className='fl sub_title mgt0'>Experience </h3>
                          <a href="https://sky-soprano-139.notion.site/Myung-ina-593705b552ac44cf948557e935e5d625?pvs=4" target='_blank' className="fr txt_point">경력 기술서</a> 
                        </div>
                        
                        <div className='mgt20 mgb20 overhidden border_l pdl10'>
                          <div className='fl w_40'>
                            <b>에듀라인</b><br></br><i>2018 ~ 2018</i>
                          </div>
                          <div className="fl w_60">
                            사내 상품 홈페이지 구축
                          </div>
                        </div>
                        <div className='mgb20 overhidden border_l pdl10'>
                          <div className='fl w_40'>
                          <b>시대고시기획</b><br></br><i>2019 ~ 2021</i>
                          </div>
                          <div className="fl w_60">
                            사내 상품 홈페이지 구축 및 신규 사업 홈페이지 구축 프로젝트와 <br/>
                            PHP기반의 Ajax API를 이용한 스크립트 개발을 위주 업무 담당
                          </div>
                        </div>
                        <div className='overhidden border_l pdl10'>
                          <div className='fl w_40'>
                            <b>테이크원컴퍼니</b><br></br><i>2021 ~ 2023</i>
                          </div>
                          <div className="fl w_60">
                            사내 신규사업 브랜딩페이지 구축작업을 퍼블리셔와 협업 <br/>
                            CMS 페이지 유지보수 작업 담당
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