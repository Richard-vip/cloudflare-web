import React, { useEffect, useState } from 'react';
import axios  from 'axios';
import './App.css';


const App = () => {

  const [keys, setKeys] = useState<string[]>([]);
  const [values, setValues] = useState<string[]>([]);

  const [key, setKey] = useState('');
  const [value, setValue] = useState('');


  const getList = () => {
    axios.get('https://cloudflare-service.richard-v.workers.dev/list').then(res=>res.data).then(res=>{
      if (res?.data?.keys?.length) {
        setKeys(res.data.keys)
      }
      if (res?.data?.data?.length) {
        setValues(res.data.data)
      }
    })
  }

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setKey(value)
  }

  const handleValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setValue(value)
  }


  const addField = () => {
    axios.post('https://cloudflare-service.richard-v.workers.dev/create',{
      key,
      value
    }).then(res => {
      console.log(res)
      if (res.status) {
        getList();
      }
    })
  }

  useEffect(() => {
    getList();
  }, [])



  return (
    <div className="App">
      hello word <br />
      <table>
        <tbody>
          {keys.map((key, idx) => <tr>
            <td>{key}</td>
            <td>{values[idx]}</td>
          </tr>)}
        </tbody>
      </table>

      <input type="text" name='key' onChange={handleKeyChange} />
      <input type="text" name='values' onChange={handleValChange} />

      <button onClick={() => addField()}> 添加</button>
    </div>
  );
}

export default App;
