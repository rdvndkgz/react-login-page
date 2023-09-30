import React, { useState} from 'react';
import axios from 'axios';
import "./App.css";
import Input from "./components/input/Input";
import Button from "./components/input/button/Button";
import Form from "./components/input/form/Form";

function App() {
  const[user,setUser]=useState({name: " ", password: " " });
  const handleChange=(e) => { 
    if (e.target.type==="text")
    {
      setUser({...user, name: e.target.value });
      console.log(user);
    }
    else if (e.target.type==="password") 
    {
      setUser({...user, password: e.target.value });
      console.log(user);
    }
    

  };

  const handleClick=()=>{
    if (user.name === "") 
    {
      alert = ("Kullanıcı Adını Boş Bırakamazsınız");
    }
    else if (user.password==="") 
    {
      alert = ("Parola Boş Bırakılamaz");
    }
    else 
    { 
      alert = ("Kullanıcı Adı = " + user.name + " " + "Şifre = " + user.password );
    }
  }

  return (
    <div className="App"> <h2> Giriş Sayfası </h2>
    <Form> 
    <Input type={"text"} 
    value={user.name}
    placeHolder= {"Kullanıcı Adı"} 
    onChange = {handleChange} 
    
    />

    <Input type={"password"} 
    placeHolder= {"Şifre"} 
    value={user.password} 
    onChange = {handleChange}
    
    />  
    <Button onClick = {handleClick} /> 
    </Form>
    </div>
    
  );
}

export default App;
