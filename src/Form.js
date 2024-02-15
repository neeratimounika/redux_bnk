import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Form() {
  let dispatch =useDispatch();

  const[amount,setAmount]=useState('');
  const [fullName,setfullName] = useState('');
  const [mobile,setMobile] = useState(null);

  return (
    <div className='container'>
    <h1>Form</h1>
    <div className='row'>
      <div className='col-4'>
        <input type='number' placeholder='Enter Amount' className='form-control' value={amount}
        onChange={(e)=>{
          let data = e.target.value;
          setAmount(data);
        }}/>
      </div>
      <button className='btn btn-primary col-1 '
      onClick={()=>{
        dispatch({type:"deposit", payload: amount})
      }}>Depossit</button>

   
    
      <button className='btn btn-danger col-1 m-1'
      onClick={()=>{
        dispatch({type:"withdraw", payload: amount});
      }}>Witdraw</button>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <input type='text' placeholder='Enter FullName' className='form-control' value={fullName}
        onChange={(e)=>{
          let data = e.target.value;
          setfullName(data);
        }}/>
      </div>
      <button className='btn btn-primary col-1 mx-2'
      onClick={()=>{
        dispatch({type:"nameUpdate", payload: fullName});
        setfullName('')
      }}>Update</button>

    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <input type='text' placeholder='Enter MobileNo' className='form-control' value={mobile}
        onChange={(e)=>{
          let data = e.target.value;
          setMobile(data);
        }}/>
      </div>
      <button className='btn btn-primary col-1 mx-2'
      onClick={()=>{
        dispatch({type:"mobileUpdate", payload: mobile});
        setMobile(null);
      }}>Update</button>

    </div>
    <button className='btn btn-danger col-1 mt-2'
      onClick={()=>{
        dispatch({type: "reset"});
      
      }}>Reset</button>

    </div>
      
    
  )
}

export default Form
