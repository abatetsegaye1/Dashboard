import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
export default function Charts() {

const [datas,seDatas]=useState({china:[],india:[]});


//console.log("what happen datas after rendering india" +country.india.length)
useEffect(()=>{
  let china=[],india=[];
  
  function handleData(){
    
    fetch('https://api.worldbank.org/v2/country/IND;CHN/indicator/SP.POP.TOTL?format=json&date=2000:2010')
     .then(response => response.json())
     .then(data => {
       
      let decreasedpop;
       data[1].forEach(element => {
        decreasedpop=Math.ceil(element.value / 50000000);
       
       if(element.countryiso3code==='CHN'){
         china.push(decreasedpop);
       //  console.log("china "+china);
       }
       if(element.countryiso3code==='IND')
         india.push(decreasedpop);
         //console.log("india "+ india);
       }
     );
    
    
     seDatas({...datas,china:[...china],india:[...india]});
    });
     //console.log(Object.values(countrydata[0]))
     console.log("china" +china.length);
   // return countrydata;
   seDatas({...datas,china:[...china],india:[...india]});
    
  }
  handleData();
 // console.log("country "+ Object.values(country));
 

},[]);
  const data={
    labels:[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010],
    datasets: [{
      label: 'CHINA',
      tension: 1,
      pointStyle:'line',
      data: [...datas.china],
      cubicInterpolationMode: 'monotone',
      border: '1px solid #3751FF'
    },
    {
      label: 'INDIA',
      tension: 1,
      pointStyle:'line',
      data: [...datas.india],   
      cubicInterpolationMode: 'monotone', 
      border: '1px solid #DFE0EB'
    }
]

  
  };


  return (
    <div className="chart">
    <div className="chart_table">
       <p className="chart_descr">Population's Trends</p>
       <p className="date">23 May,2022, 09:41PM</p>
      <Line data={data} options= {{

      

            plugins: {
            legend: {
                display: true,
                labels: {
                    boxHeight:1,
                    boxWidth:20,
                    padding:20,
                    textAlign:"center",
                    
                }
            }
        },
        scales: {
         
        
          y: {
            
            min: 5,
            max: 50,
            ticks: {
              beginAtZero: false,
              stepSize:1
            }
          }
        }            
          }}
          
          
          
          
          />
    </div>
    <div className="chart_stat">
        <div className="chart_stat--item">
           <p className="item_para">Resolved</p>
           <p className="item_count">32</p>
        </div>
        <div className="chart_stat--item">
           <p className="item_para">Average First response time</p>
           <p className="item_count">9h 8m</p>
        </div>
        <div className="chart_stat--item">
           <p className="item_para">Average Response time</p>
           <p className="item_count">32h</p>
        </div>
        <div className="chart_stat--item">
           <p className="item_para">UnResolved</p>
           <p className="item_count">32</p>
        </div>
        <div className="chart_stat--item">
           <p className="item_para">Resolved</p>
           <p className="item_count">32</p>
        </div>
    </div>
  </div>
  )
}
