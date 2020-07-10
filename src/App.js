import React, { useEffect } from 'react';

import './App.css';
import {Cards,Chart,CountryPicker} from './components';
import {fetchdata}  from './API';

function App() {
  const [data,setdata]=React.useState([])
  const [country,setcountry]=React.useState()
  // const confirmed
useEffect(()=>{
  async function getdata(){
    const getdata=await fetchdata();
    setdata(getdata)
    console.log(getdata)
  }

  getdata();
},[])

const  handleCountryChange=async(country)=>{
  const getdata=await fetchdata(country );
  setdata(getdata)
  setcountry(country)
  console.log(getdata)
    }
  
  return (
    <div >
    {/* {data} */}
    <div className="containercountry" style={{marginTop:"30px"}}>
    <img src="Images/covid_logo.png" alt="Covid-19" className="image"/></div>
      <Cards data={data} className="containercard"/>
      <div className="containercountry">
       <CountryPicker handleCountryChange={handleCountryChange} /></div>
   
       <div className="containercountry"> <Chart data={data} country={country}/></div>
     
    
    </div>
  );
}

export default App;
