import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'; 
import store from './bookStore'; 
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Provider store={store}> 
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        <Footer />
      </>
    </Provider>
  );
}

export default App;
