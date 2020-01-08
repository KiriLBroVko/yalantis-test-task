import React from 'react';
import Header from '../header';
import Footer from '../footer';
import MainWrapper from '../main';
import Report from '../report';
import './index.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <MainWrapper>
        <Report type="user" />
      </MainWrapper>
      <Footer />
    </div>
  );
}

export default App;
