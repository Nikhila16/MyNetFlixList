import React from 'react';
import Sdata from './data';
import Card from './Card';

const Netflix = () => {
    return (
    <Card 
      key = {Sdata[1].id}
      imgsrc = {Sdata[1].imgsrc}
      sname = {Sdata[1].sname}
      title = {Sdata[1].title}
      links = {Sdata[1].links}
    />
  )
}

export default Netflix;