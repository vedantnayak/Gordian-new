import React,{useState} from 'react';
import Axios from 'axios';
import './login.css';
import img from 'C:/Users/VN/Desktop/gordian/client/src/assets/capture.PNG';
export default function Login(props) {
  const [id,getid]=useState('');
  const [pw,getpw]=useState('');
  const login=()=>{
    Axios.post("http://localhost:3001/login",{
      id: id,
      pass: pw,
    }).then((response)=>{
        if(response.data.message==='admin')
        props.history.push('/admin');
        if(response.data.message==='correct')
        props.history.push('/menu');
    })
  };
  return(
    <div className="login">
      <img src={img} alt='logo'/>
      <br></br>
      <br></br>
      <br></br>
      <label >Employee ID</label>
      <input type='username' align='center' name='id' onChange={(e)=>getid(e.target.value)} required/>
      <label>Password</label>
      <input type='password' align='center' name='password' onChange={(e)=>getpw(e.target.value)} required/>
      <button onClick={login}>Submit</button>
    </div>
  );
}