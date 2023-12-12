import React, { useState } from 'react';
import Stepers from './Components/Stepers/Stepers';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      // theme="dark"
      />
      <div className="App">
        <Stepers />
      </div>
    </>
  );
}

export default App;
