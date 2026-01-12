import React, { useState  } from 'react';
import Data from "../data/Data.js";
import ProfileImg from "../img/profile_img.png";
import { Heading, Flex , Timeline , Card, Text, List , Link , Box } from "@chakra-ui/react";
import { DiCodeBadge  } from "react-icons/di"

const timelineData = [
  {
    title:'에듀라인',
    date : '2018 ~ 2018',
    index:'퍼블리셔'
  },
  {
    title:'시대고시기획',
    date : '2019 ~ 2021',
    index:'퍼블리셔'
  },
  {
    title:'테이크원컴퍼니',
    date : '2021 ~ 2023',
    index:'프론트앤드'
  },
  {
    title:'시대고시기획',
    date : '2024~',
    index:'프론트앤드'
  },
]

const myskill = {
  front: ['React','Node','javascript','jQuery','html','css'],
  back: ['mysql(5.x)' , 'php(6.x)'],
  etc: ['Git' , 'hideSQL','photoshop']
}
export default function Content(){
    let [items] = useState(Data);

    return(
        <Box layerStyle="container">
            <Box layerStyle="content">
              <Flex gap="3" justify="start" align="center" mb="30px" layerStyle="inner" bg="contentBg">
                <Box  width='15%'>
                  <img src={ProfileImg} alt='profile_img'/>
                </Box>
                <Flex justify="start" align="center" width='80%'>
                  <Text textStyle="contentTxt" pl="10px">안녕하세요😊<br/>
                  저는 상품페이지 퍼블리싱을 시작으로 지금은 프론트앤드로 성장한 명인아입니다.<br/>
                  
                  </Text>
                </Flex>
              </Flex>                          
            </Box>


            <Box layerStyle="content">
              <Flex  flexWrap="wrap" gap="10" >
                <Box flexGrow="1">         
                  <Card.Root layerStyle="inner">
                    <Text textStyle="pageTit">Experience </Text>       
                    <Card.Body position="relative" border="0">
                      <Timeline.Root>
                        <Flex gap="10" flexWrap="wrap" w="100%">
                        {timelineData.map((row, index) => {
                          return (
                            <Timeline.Item key={index} gap="1" >
                              <Timeline.Connector>
                                <Timeline.Separator width="2px"/>
                                <Timeline.Indicator>
                                  <DiCodeBadge color="#ffffff"/>
                                </Timeline.Indicator>
                              </Timeline.Connector>
                              <Timeline.Content key={index} item="top" gap="1">
                                <Timeline.Title textStyle="contentTit">{row.title}</Timeline.Title>
                                <Timeline.Description>{row.date}</Timeline.Description>
                                <Text as="p" textStyle="sm" wordBreak="keep-all">
                                  {row.index}
                                </Text>
                              </Timeline.Content>
                            </Timeline.Item>
                            )
                          })}
                          </Flex>
                        </Timeline.Root>
                    </Card.Body>                
                  </Card.Root>
                </Box>

                <Box flexGrow="1">
                  <List.Root bg="contentBg"  layerStyle="inner">
                    <Text textStyle="pageTit">Skill</Text>
                    {Object.entries(myskill).map(([category, items], index) => (
                      <List.Item ml="10px" key={index}>
                        <b>{category}</b> : {items.join(', ')}
                      </List.Item>
                    ))}                    
                  </List.Root>
                </Box>                
                
              </Flex>
              
            </Box>
            
        </Box>
    )
}