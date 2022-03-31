import React from 'react'
import New from './New'
const News = ({news}) => {
  return (
    <>
    {
        news.map((data)=>(
            <New data={data}/>
        ))
    }
    </>
  )
}

export default News