import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


const App = () => {

  const [name, setName] = useState('');


  const getName = () => {
    axios('https://cloudflare-service.richard-v.workers.dev/get', {
      method: 'GET',
      params: { key: 'name' }
    }).then(res => {
      if (res?.data?.data) {
        setName(res.data.data)
      }
    })
  }

  useEffect(() => {
    getName()
  }, [])



  return (
    <div className="App">
      hello word <br />
      {name}
      <button onClick={getName}>获取name</button>
    </div>
  );
}

export default App;
