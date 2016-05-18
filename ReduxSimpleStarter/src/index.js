import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
const App = ()=>{
  return <div>
  <SearchBar />
   </div>;
}

ReactDom.render(<App/>,document.querySelector('.container'));


const API_KEY = 'AIzaSyCL15S6qpmjsUfbbz8lUuM8UXI2DL1cV_c';
