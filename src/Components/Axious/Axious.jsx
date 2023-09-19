import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { LineWave } from  'react-loader-spinner'


const Axious = () => {
    const [phones, setPhones]= useState([])
    const [loading, setLoading]= useState(true)
    useEffect(()=> {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then (data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData= data.data.data;
            const fakaPhoneData= phoneData.map(phone =>{
               const obj= {
                name:phone.phone_name,
                price: parseInt(phone.slug.split('-')[1])
                

               } 
           return obj;
            })
            setPhones(fakaPhoneData)
            setLoading(false)

        })
    },[])
    return (
        
        <div>
       { loading &&     <LineWave
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="line-wave"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  firstLineColor=""
  middleLineColor=""
  lastLineColor=""
/>}
            <h2 className="text-xl">phone : {phones.length}</h2>
            
        <BarChart width={600} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
         
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </BarChart>

        </div>
    );
};

export default Axious;