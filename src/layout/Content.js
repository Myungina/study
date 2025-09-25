import React, { useState  } from 'react';
import Data from "../data/Data.js";
import styles from "../css/Content.module.scss";
import ProfileImg from "../img/profile_img.png";
import { Flex , Timeline , Card, Text, List} from "@chakra-ui/react";
import { DiCodeBadge  } from "react-icons/di"

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

const timelineData = [
  {
    title:'에듀라인',
    date : '2018 ~ 2018',
    index:'사내 상품페이지 구축'
  },
  {
    title:'시대고시기획',
    date : '2019 ~ 2021',
    index:'사내 상품 홈페이지 구축 및 신규 사업 홈페이지 구축 프로젝트와 PHP기반의 Ajax API를 이용한 스크립트 개발을 위주 업무 담당'
  },
  {
    title:'테이크원컴퍼니',
    date : '2021 ~ 2023',
    index:'사내 신규사업 브랜딩페이지 구축작업을 퍼블리셔와 협업 CMS 페이지 유지보수 작업 담당'
  },
  {
    title:'시대고시기획',
    date : '2024~',
    index:'관리자 페이지 유지보수 사내 홈페이지 프론트단 개발'
  },
]
export default function Content(){
    let [items] = useState(Data);

    return(
        <div className="wrap content">
            <div className={styles.inner}>

              <Flex gap="3" justify="center" item="center">
                <div className="w_30">
                  <img src={ProfileImg} alt='profile_img'/>
                </div>
                <div className="w_70 pdl10" >
                  <Text pl="10px">안녕하세요!<br/>
                  저는 상품페이지 퍼블리싱을 시작으로 지금은 프론트앤드로 성장한 명인아입니다.<br/>
                  php기반의 홈페이지 유지보수와 구축을 담당하며 Ajax 데이터 통신을 이용한 개발을 하였고,
                  node기반의 CMS페이지 유지보수를 기본 업무로 사내 신규사업 브랜딩페이지 퍼블리싱과 관련 게시판 신규개발을 한 경헙이 있습니다.<br/>
                  다른 환경의 회사를 다니면서 다양한 프로젝트를 경험하고, 협업을 기본으로 팀원들과 다양한 대화를 통해 개발을 했습니다.<br/>
                  잘 부탁드립니다!
                  </Text>
                </div>
              </Flex>


              <Card.Root p="1rem" maxHeight="100%">
                <Flex justify="space-between">
                  <h3 className={styles.subtitle}>Experience </h3>
                  <a href="https://sky-soprano-139.notion.site/Myung-ina-593705b552ac44cf948557e935e5d625?pvs=4" target='_blank' className={styles.txt_point}>경력 기술서</a> 
                </Flex>
                <Card.Body pe="0px" mt="31px" position="relative">
                  <Timeline.Root>
                    {timelineData.map((row, index, arr) => {
                      return (
                        <Timeline.Item key={index} mb="20px">
                          <Timeline.Connector>
                          <Timeline.Separator/>
                          <Timeline.Indicator width="30px" height="30px">
                            <DiCodeBadge  color="white" size="20px"/>
                          </Timeline.Indicator>
                        </Timeline.Connector>
                        <Timeline.Content key={index} gap="1" item="top">
                          <Timeline.Title className={styles.bold}>{row.title}</Timeline.Title>
                          <Timeline.Description>{row.date}</Timeline.Description>
                          <Text as="p" textStyle="sm" wordBreak="keep-all">
                            {row.index}
                          </Text>
                        </Timeline.Content>
                        </Timeline.Item>
                      )
                    })}
                  </Timeline.Root>
                </Card.Body>
                
              </Card.Root>
              <div>
                <h3 className={styles.subtitle}>Skill</h3>
                <Flex direction="column">
                
                  <div style={{textAlign:"center", height:"300px"}}>
                    <Bar options={options} data={data}/>
                  </div>
                
                </Flex>
                <List.Root className={styles.introtable}>
                <List.Item >
                  <b className={styles.col_puple}>Front : </b> React , Node , Javascrip , JQuery , 그누보드 , SCSS 
                </List.Item>
                <List.Item ><b className={styles.col_pink}>Back : </b> PHP , restfulAPI , Ajax</List.Item>
                <List.Item ><b className={styles.col_mint}>DB : </b>mySQL (5.x)</List.Item>
                <List.Item ><b className={styles.col_sky}>Tool : </b>Git , Zeplin , Bitbucket, Photoshop , Illust</List.Item>
                </List.Root>
              </div>              
            </div>
        </div>
    )
}