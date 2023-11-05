import React from 'react'

function Service({data}) {
  return (
    <>
      {data.map(({title, description})=>{
        return (
          <div key={title}>
            {/* <img src={img}/> */}
            <h3 className='service-title'>{title}</h3>
            <p>{description}</p>
          </div>
        )
      })}
    </>
  )
}

export default Service
