import React, { useState } from 'react';
import './App.css';
import Header  from './components/common/header/index';
import TabOptions from './components/common/taboptions/index';
import Footer from './components/common/footer/index';
import Delivery from './components/delivery/index';
import DiningOut from './components/diningout/index';
import Night from './components/night/index';

function App() {
  const [activetab, setactivetab] = useState("Delivery");

  const getCorrectScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />;
      case "Dining Out":
        return <DiningOut />;
      case "NightLife":
        return <Night />;
      default:
        return <Delivery />;
    }
  };

  return (
    <div className="App">
      <Header />
      
      <TabOptions activeTab={activetab} setactivetab={setactivetab} />
      {getCorrectScreen(activetab)}
      <Footer/>
    </div>
  );
}

export default App;
