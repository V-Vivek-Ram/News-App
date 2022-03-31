import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const New = ({data}) => {
  return (
    <div className='card col-lg-3 text-center' >
        <img className='image text-center' src={data.urlToImage} alt="Trending"></img>
        <hr></hr>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p style={{ color:'violet'}}><strong>Author :{data.author}</strong></p>
        <a href={data.url}>Readmore</a>
    </div>
  )
}

export default New