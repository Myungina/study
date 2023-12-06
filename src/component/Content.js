import React, { useState } from 'react';
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

const labels = ["html/css", "jQuery", "php" ,  "node.js" , "react"];  
export const data = {
  labels,
  datasets: [
    {
      label:'Level',
      data: [90 , 90 , 70 , 60 , 20],
      barThickness: 20,
      borderColor: '#7ecfc2',
      backgroundColor: '#9ee7dc',
    },
  ],
};
export default function Content(){
    let [items] = useState(Data);
    
    return(
        <div className="wrap content">
            <div className="inner">
                <table className="table_wrap">
                    <tbody>
                    <tr>
                        <td>
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
                                <h3 className='sub_title'>Skill</h3>
                                <p>
                                    {items[1].front}<br/>
                                    {items[1].back}<br/>
                                    {items[1].etc}<br/>
                                </p>
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