import React from 'react'
import CardStyle from "../sass/card.module.scss"
function Card({name, job, comment, img}) {
  return (
    <div className='container'>
        <div className={CardStyle["card"]}>
            <h1>{name}</h1>
            <h3>{job}</h3>
            <p>{comment}</p>
            <img src={img} alt={name} />
            <div className={CardStyle["buttons"]}>
                <button className={CardStyle["small"]}>Small</button>
                <button className={CardStyle["large"]}>Large</button>
            </div>
        </div>
    </div>
  )
}

export default Card