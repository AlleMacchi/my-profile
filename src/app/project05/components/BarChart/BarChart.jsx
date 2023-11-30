import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceLine,
    ResponsiveContainer
  } from "recharts";
  import style from '../../../../styles/pages/project05/chart/style.module.css'



function MyBarChart(props){
    return (
      <div style={{width:"100%", height:"Calc(100vh/5)" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={props.data}
            margin={{
              top: 25,
              right: 0,
              left: -30,
              bottom: -10
            }}
            barSize={5}
            barGap={0}
          >
            <CartesianGrid opacity={0.1} vertical={false}/>
           
            <XAxis 
                dataKey="name"
                tick={{fill: '#ebeefe'}} 
                style={{
                    fontSize: '0.8rem',
                    fontFamily: 'Times New Roman',
                }} />

            <YAxis 
                domain={[0, 100]}
                tick={{fill: '#ebeefe'}} 
                style={{
                    fontSize: '0.8rem',
                    fontFamily: 'Times New Roman',
                }} />
            
            <ReferenceLine y={100} label={{ value: props.title , fill: 'white' }} stroke='transparent' />    
            
            <Tooltip 
                content={<BarCustomTooltip />}
                cursor={{fill: 'rgba(96, 96, 96, 0.37)'}}
                dy={10}
            />
            
            <defs>
                <linearGradient id="colorBarChart" x1="0" y1="0" x2="0" y2="1"> 
                    <stop offset="0%" stopColor='#FFF' stopOpacity={1} />
                    <stop offset="95%" stopColor='#0094FF' stopOpacity={0.05} />
                </linearGradient>
    
                <linearGradient id="colorBarChart2" x1="0" y1="0" x2="0" y2="1"> 
                    <stop offset="0%" stopColor='#00FFFF' stopOpacity={1} />
                    <stop offset="95%" stopColor='#0094FF' stopOpacity={0.05} />
                </linearGradient>
            </defs>
    
    
    
            <Bar dataKey="main" fill='url(#colorBarChart)'/>
            <Bar dataKey="aux" fill='url(#colorBarChart2)' />
            
          </BarChart>
         
        </ResponsiveContainer>
      </div>
    );
  }

  function BarCustomTooltip({active, payload, label}){
    if (active){
       return <div className={style.tooltip}>
        <p>Inj.: {label}</p>
            <p>
               main:  {payload[0].value.toFixed(1)} 
            </p>
            <p>
                aux: {payload[1].value.toFixed(1)}
            </p>

        </div>
    }
}


  export default MyBarChart;