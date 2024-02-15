import React from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider/ImageSlider';
function App() {
  const slides = [
    {url: 'http://localhost:3001/victoria.jpg', title:'victoria'},
    {url: 'http://localhost:3001/Science_city.jpg', title:'science_city'},
    {url: 'http://localhost:3001/Aquatica.jpg', title:'aquatica'},
    {url: 'http://localhost:3001/Birla_planeterium.jpg', title:'bp'},
    {url: 'http://localhost:3001/alipore_zoo.jpg', title:'az'},
    {url: 'http://localhost:3001/Belur_math.jpg', title:'bm'},
    {url: 'http://localhost:3001/eden_gardens.jpg', title:'eg'},
    {url: 'http://localhost:3001/Indian_museum.jpg', title:'im'},
    {url: 'http://localhost:3001/Marble_Palace_Kolkata.jpg', title:'mp'},
    {url: 'http://localhost:3001/Nicco_Park.jpg', title:'np'},
    {url: 'http://localhost:3001/Nicco_Park.jpg', title:'np'},
    {url: 'http://localhost:3001/Salt_Lake_Stadium.jpg', title:'sls'},];
   const containerStyles = {
    width: '500px',
    height: "280px",
    margin: '0 auto',
   };
    return (
    <div className="App">
      <h1>This is a Image slider</h1>
       <div style={containerStyles}> 
         <ImageSlider slides={slides} parentWidth={500}/>
       </div>
    </div>
  );
}

export default App;
