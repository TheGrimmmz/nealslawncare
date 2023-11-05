import React from 'react'


function Policy({data}) {
  return (
    <div>
    {data.map(({title, description})=>{
      return (
          <div key={title}>
            <h3 className='policy-title'>{title}</h3>
            <p>{description}</p>
          </div>
      )
    })}
    </div>
  )
}

export default Policy
