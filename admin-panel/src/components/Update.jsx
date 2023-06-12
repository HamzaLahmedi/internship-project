import React, { useEffect, useState } from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
import axios from 'axios';

function Update() {

    //const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
      console.log('Fetching data...');
      axios
        .get('http://localhost:5000/api/auth/allUsers')
        .then(res => {
         
          setValues(res.data.users);
        })
        .catch(err => console.log(err));
    }, []);

    const [values,setValues]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        cin:'',
        Role:''
    })
    const navigate=useNavigate();
    const handleUpdate=(event)=>{
        event.preventDefault();
        axios.put('http://localhost:5000/api/auth/updateUser/'+id,values)
        .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(err => console.log(err));
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50  border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Update User</h1>
            <form onSubmit={handleUpdate}>
                <div className='mb-2'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' name='firstName' className='form-control' placeholder='Enter First Name'
                        value={values.firstName}      onChange={e=>setValues({...values,firstName:e.target.value})}

                    />

                </div>
                <div className='mb-2'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' name='lastName' className='form-control' placeholder='Enter Last Name'
                     value={values.lastName}  onChange={e=>setValues({...values,lastName:e.target.value})}
                    />

                </div>
                <div className='mb-2'>
                    <label htmlFor='email'>email</label>
                    <input type='text' name='email' className='form-control' placeholder='email'
                     value={values.email} onChange={e=>setValues({...values,email:e.target.value})}
                    />
                   
                </div>
                
                <div className='mb-2'>
                    <label htmlFor='password'>password</label>
                    <input type='password' name='password' className='form-control' placeholder='password'
                     value={values.password} onChange={e=>setValues({...values,password:e.target.value})}
                    />
                   
                </div>



                



                <div className='mb-2'>
                    <label htmlFor='role'>Role</label>
                    <input type='text' name='role' className='form-control' placeholder='role'
                     value={values.role} onChange={e=>setValues({...values,Role:e.target.value})}
                    />

                </div>
                <button className='btn btn-success'>Update</button>
                <Link to="/" className="btn btn-primary ms-3"> Back</Link>
            </form>

        </div>
      
    </div>
  )
}

export default Update
