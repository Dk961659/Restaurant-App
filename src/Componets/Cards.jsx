import React from 'react'

const Cards = ({ menuData }) => {
  
  return (
    <>
      {
        menuData.map((curElem,index) => {
          const {id,name,category,description,image}=curElem;
          return(
<div className='card-container'key={index}>
        <span className='id'>{id}</span>
        <span>{category}</span>
        <h1>{name}</h1>
        <span>{ description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, possimus, non temporibus soluta fugit veritatis, velit voluptate quo accusantium at voluptatibus? Quo pariatur autem quis, distinctio consectetur exercitationem enim porro.</span>
        <hr></hr>
        <img src={image} alt={name} />
        <button>Read</button>
        <button>Order</button>
      </div>
          )
        })
      }
      

    </>
  )
}

export default Cards;