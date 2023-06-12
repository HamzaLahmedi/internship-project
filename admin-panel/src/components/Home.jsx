import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Fetching data...');
    axios
      .get('http://localhost:5000/api/auth/allUsers')
      .then(res => {
        console.log('Data fetched:', res.data);
        setData(res.data.users);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = id => {
    const confirm = window.confirm('Would you like to delete?');
    if (confirm) {
      axios
        .delete(`http://localhost:5000/api/auth/deleteUser/${id}`)
        .then(res => {
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of Users</h1>
      <div className='w-75 rounded bg-white border show p-4'>
        <div className='d-flex justify-content-end'>
          <Link to='/create' className='btn btn-success'>
            Add User
          </Link>
        </div>
        <table className='table table-stripped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((d, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{d.firstName}</td>
                  <td>{d.lastName}</td>
                  <td>{d.email}</td>
                  <td>{d.role}</td>
                  <td>
                    <Link to={`/read/${d._id}`} className='btn btn-sm btn-info me-2'>
                      Read
                    </Link>
                    <Link to={`/update/${d._id}`} className='btn btn-success ms-3'>
                      Edit
                    </Link>
                    <button
                      className='btn btn-sm btn-danger'
                      onClick={() => handleDelete(d._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='6'>Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
