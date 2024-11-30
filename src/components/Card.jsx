import React from 'react'
const Card = ({name, description, image, characters, action }) => {
  return (
    <div className='card'>
        <h1 className='card-name'> {name} </h1>
        <div className='card-img'><img src={image} alt={name} /></div>
        <p className='card-description'> {description} </p>
        <div className="card-characters">
        {characters.map((ch, index) => (
          <div key={index}>{ch}</div>
        ))}
      </div>
        <button onClick= {()=> action(name)} className='btn'>button</button>
    </div>
  )
}

export default Card