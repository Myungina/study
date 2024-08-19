import React, { useState , useEffect } from 'react';
import Data from "../data/Data.js";
import styles from "../css/Content.module.css";
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
            <div className={styles.inner}>
              <ul className={styles.introtable}>
                <li className="w_30">
                  <img src={ProfileImg} alt='profile_img'/>
                </li>
                <li className="w_70 pdl10" >
                  <p className={styles.intro_txt}>안녕하세요!<br/>
                  저는 상품페이지 퍼블리싱을 시작으로 지금은 프론트앤드로 성장한 명인아입니다.<br/>
                  php기반의 홈페이지 유지보수와 구축을 담당하며 Ajax 데이터 통신을 이용한 개발을 하였고,
                  node기반의 CMS페이지 유지보수를 기본 업무로 사내 신규사업 브랜딩페이지 퍼블리싱과 관련 게시판 신규개발을 한 경헙이 있습니다.<br/>
                  다른 환경의 회사를 다니면서 다양한 프로젝트를 경험하고, 협업을 기본으로 팀원들과 다양한 대화를 통해 개발을 했습니다.<br/>
                  잘 부탁드립니다!
                  </p>
                </li>
              </ul>
              <ul className="">
                <li className={styles.introtable}>
                  <h3 className={styles.subtitle}>Experience </h3>
                  <a href="https://sky-soprano-139.notion.site/Myung-ina-593705b552ac44cf948557e935e5d625?pvs=4" target='_blank' className={styles.txt_point}>경력 기술서</a> 
                </li>
                <li className={styles.introtable}>
                  <div className='w_30'>
                    <b>에듀라인</b><br></br><i>2018 ~ 2018</i>
                  </div>
                  <div className="w_70">
                    사내 상품 홈페이지 구축
                  </div>
                </li>
                <li className={styles.introtable}>
                  <div className='w_30'>
                    <b>시대고시기획</b><br></br><i>2019 ~ 2021</i>
                    </div>
                    <div className="w_70">
                      사내 상품 홈페이지 구축 및 신규 사업 홈페이지 구축 프로젝트와 <br/>
                      PHP기반의 Ajax API를 이용한 스크립트 개발을 위주 업무 담당
                    </div>
                </li>
                <li className={styles.introtable}>
                <div className='w_30'>
                    <b>테이크원컴퍼니</b><br></br><i>2021 ~ 2023</i>
                  </div>
                  <div className="w_70">
                    사내 신규사업 브랜딩페이지 구축작업을 퍼블리셔와 협업 <br/>
                    CMS 페이지 유지보수 작업 담당
                  </div>
                </li>
              </ul>
              <ul>
                <li className={styles.introtable}>
                <h3 className={styles.subtitle}>Skill</h3>
                </li>
                <li className={styles.introtable}>                  
                  <div style={{textAlign:"center", height:"300px"}}>
                    <Bar options={options} data={data}/>
                  </div>
                </li>
                <li className={styles.introtable}>
                  <p><b className={styles.col_puple}>Front : </b> React , Node , Javascrip , JQuery , 그누보드 , SCSS </p>
                  <p><b className={styles.col_pink}>Back : </b> PHP , restfulAPI , Ajax</p>
                  <p><b className={styles.col_mint}>DB : </b>mySQL (5.x)</p>
                  <p><b className={styles.col_sky}>Tool : </b>Git , Zeplin , Bitbucket, Photoshop , Illust </p>
                </li>
              </ul>              
            </div>
        </div>
    )
}