import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Read() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    console.log('Fetching data...');
    axios
      .get(`http://localhost:5000/api/auth/getOneUser/${id}`) // Add a slash before id
      .then(res => {
        console.log('Data fetched:', res.data);
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, [id]); // Include id as a dependency in the useEffect dependency array

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Detail of User</h3>
        <div className='mb-2'>
          <strong>FirstName: {data.firstName}</strong>
        </div>
        <div className='mb-2'>
          <strong>LastName: {data.lastName}</strong>
        </div>
        <div className='mb-2'>
          <strong>Email: {data.email}</strong>
        </div>
        <div className='mb-2'>
          <strong>CIN: {data.cin}</strong>
        </div>
        <div className='mb-2'>
          <strong>Role: {data.role}</strong>
        </div>
        <Link to={`/update/${id}`} className='btn btn-success ms-3'>Edit</Link>
        <Link to='/' className='btn btn-primary ms-3'>
          Back
        </Link>
      </div>
    </div>
  );
}

export default Read;
