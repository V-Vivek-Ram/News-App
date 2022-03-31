import { useEffect, useState } from 'react';
import News from './components/News'
import './components/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import Footer from './components/footer';
function App() {
 
  const [datas,setData]=useState([])
  useEffect(()=>{
    const getData=async()=>{
     const res= await fetchData()
     setData(res)
    }
    getData()
   },[])
  const fetchData=async()=>{
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=e76b0b03275a4b4397c756548e99e41e")
    const data = await res.json()
    const dt= data.articles //.data.articles
    console.log(dt)
    return dt
  }
  return (
  <>
    <Header/>
    <div className='full'>
    <div className='row justify-content-center'>
      <News news={datas}/>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
