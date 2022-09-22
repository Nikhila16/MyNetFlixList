import React from 'react';
import './style.css';
import './data';
import Heading from './Header';
import Image from './Image';


const Card = (props) => {
    return (
        <div className="card-item">
        <Image imgsrc={props.imgsrc}/>
        <div className="card-info">
          <span className="card-title">{props.title}</span>
          <Heading sname={props.sname}/>
          <a href={props.links} target="_ "><button>Click Me</button></a>
        </div>
        </div>
    )
}

export default Card;