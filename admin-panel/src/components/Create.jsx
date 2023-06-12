import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';

function Create() {
    const [values,setValues]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        cin:'',
        Role:''
    })
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:5000/api/auth/signup',values)
        .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(err => console.log(err));
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50  border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' name='firstName' className='form-control' placeholder='Enter First Name'
                    onChange={e=>setValues({...values,firstName:e.target.value})}
                    />

                </div>
                <div className='mb-2'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' name='lastName' className='form-control' placeholder='Enter Last Name'
                    onChange={e=>setValues({...values,lastName:e.target.value})}
                    />

                </div>
                <div className='mb-2'>
                    <label htmlFor='email'>email</label>
                    <input type='text' name='email' className='form-control' placeholder='email'
                    onChange={e=>setValues({...values,email:e.target.value})}
                    />
                   
                </div>
                
                <div className='mb-2'>
                    <label htmlFor='password'>password</label>
                    <input type='password' name='password' className='form-control' placeholder='password'
                    onChange={e=>setValues({...values,password:e.target.value})}
                    />
                   
                </div>



                <div className='mb-2'>
                    <label htmlFor='password'>cin</label>
                    <input type='text' name='cin' className='form-control' placeholder='cin'
                    onChange={e=>setValues({...values,cin:e.target.value})}
                    />
                   
                </div>



                <div className='mb-2'>
                    <label htmlFor='role'>Role</label>
                    <input type='text' name='role' className='form-control' placeholder='role'
                    onChange={e=>setValues({...values,Role:e.target.value})}
                    />

                </div>
                <button className='btn btn-success'>Submit</button>
                <Link to="/" className="btn btn-primary ms-3"> Back</Link>
            </form>

        </div>
      
    </div>
  )
}

export default Create
