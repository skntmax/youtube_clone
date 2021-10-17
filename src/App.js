import React ,{useState}  from 'react'
// import logo from './logo.svg';
// import './App.css';
import Header from './Main/Header'
import Content from './Main/Content'


 
function App() {

 const [searchVal, setSearchVal] = useState('') 
 const getInputVal =(val) =>{ 
  setSearchVal(val)
}
  return (
    <div className="App">
      <Header getval={getInputVal}/>
      <Content  setval={searchVal}  />
    </div>
  );
}

export default App;
