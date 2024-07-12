import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, CartesianAxis } from 'recharts';

const data = [
  {
    name: 'Page A',
    key:'0',
    pv: 0,
    
  },
  {
    name: 'Jan',
   key:'20K',
    pv: 1398,
    
  },
  {
    name: 'Febr',
  
    pv: "20k",
    
  },
  {
    name: 'Mar',
  
    pv: '40k',
    
  },
  {
    name: 'April',

    pv: "60k",
    
  },
  {
    name: 'May',
  
    pv: "80k",
    
  },
  {
    name: 'June',
    
    pv: "100",
    
  },
  {
    name: 'July',
    
    pv: "120k",
    
  },
  {
    name: 'Aug',
   
    pv: "140k",
    
  },
  {
    name: 'Sept',
    
    pv: "160k",
    
  },
  {
    name: 'Oct',
   
    pv: "180k",
    
  },
  {
    name: 'Nov',
    
    pv: "200k",
  
  },
  {
    name: 'Dec',
  
    pv: "220k",
    
  },
];


export default class Example extends PureComponent {


  chart = (interval) => (
    <ResponsiveContainer height={250} width="100%" >
      <LineChart data={data}  margin={{ right: 30, top: 40 }}  >
       
        <XAxis dataKey="name"  />
        <YAxis data="key" />
        <Line type="monotone" dataKey="pv" stroke="#8884d8"  activeDot={{ r: 8 }} />

      </LineChart>
    </ResponsiveContainer>
  );

  render() {
    return (
      <>
        {this.chart('preserveEnd')}
      
      </>
    );
  }
}
