import React from 'react';
import Card from './Card';
import Sdata from './data';
// import Netflix from './Netflix';
// import Amazon from './Amazon';

// const favSeries = 'netflix';

// const FavS = () =>{
// if(favSeries === 'netflix'){
//   return <Netflix />
// }else{
//   return  <Amazon />
// }
// }

function data(val){
  return (
    <Card 
      key = {val.id}
      imgsrc = {val.imgsrc}
      sname = {val.sname}
      title = {val.title}
      links = {val.links}
    />
  )
}

function App() {
  return (

      <>
      <div className="wrapper">
      <h1 className="header">Top List of Netflix Series</h1>
      <div className="cards-wrap">
       {Sdata.map(data)}
       {/* <FavS />  */}

        {/* {(favSeries === 'netflix') ? <Netflix/> : <Amazon/> } */}

       </div>
       </div>
      </>

  )
}

export default App;
