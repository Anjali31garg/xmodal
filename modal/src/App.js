import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[open,setOpen] = useState(false);
  const[formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: ''
    
  });

  const openModal = ()=>{
    setOpen(true);
  };

  const closeModal = ()=>{
    setOpen(false);
  }

  const handleChange =(e)=>{
    const{id,value} = e.target;
    setFormData({...formData,[id]:value});
  }

  const handleForm =()=>{
    if(!formData.username){
      return;
    }
    if(formData.email.indexOf('@') === -1){
      alert("Invalid email");
      return;
    }
    if(formData.phone.length !==10 || isNaN(formData.phone)){
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const todayData = new Date();
    if(new Date(formData.dob) >= todayData){
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    setFormData({
      username: '',
      email: '',
      dob: '',
      phone: ''
    })
  }

  
  return (
    <div className="App">
       <h1>User Details Modal</h1>
       <button onClick={openModal}>Open Form</button>
       {open && (
        <div className='modal' onClick={closeModal}>
               <div className="modal-content" onClick={(e) => e.stopPropagation()}>
               <h2>Fill Details</h2>
            <form onSubmit={handleForm}>
            <label htmlFor="username">Username:</label>
              <input type="text" id="username" value={formData.username} onChange={handleChange} required />
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required />
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required/>
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />
              <button type="submit" className="submit-button">Submit</button>
         
          
            </form>
            {/* <button type="submit" className="submit-button" onClick={handleForm}>Submit</button>
          */}
          
        </div>

        </div>
       )}
    </div>
  );
}

export default App;
