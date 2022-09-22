import React from 'react';
import Sdata from './data';
import Card from './Card';

const Amazon = () => {
    return (
    <Card 
      key = {Sdata[8].id}
      imgsrc = {Sdata[8].imgsrc}
      sname = {Sdata[8].sname}
      title = {Sdata[8].title}
      links = {Sdata[8].links}
    />
  )
}

export default Amazon;