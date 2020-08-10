import React from 'react';
import './app.css';
import Navigationbar from './Component/Navbar/Navigationbar';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';



function App() {
  return (
    <div className="App">
      <div className='Mainapp'>
        <Navigationbar />
        <Content />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
