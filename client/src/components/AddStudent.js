import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const [student, setStudent] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: '',
    isActive: true,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudent({ ...student, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://student-mangment-abc.onrender.com/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });

    if (res.ok) {
      alert('Student added successfully!');
      navigate('/');
    } else {
      const data = await res.json();
      alert(`Error: ${data.error}`);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Add New Student</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <div className="mb-3">
          <input type="text" name="studentId" value={student.studentId} onChange={handleChange} className="form-control" placeholder="Student ID" required />
        </div>
        <div className="mb-3">
          <input type="text" name="firstName" value={student.firstName} onChange={handleChange} className="form-control" placeholder="First Name" required />
        </div>
        <div className="mb-3">
          <input type="text" name="lastName" value={student.lastName} onChange={handleChange} className="form-control" placeholder="Last Name" required />
        </div>
        <div className="mb-3">
          <input type="email" name="email" value={student.email} onChange={handleChange} className="form-control" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <input type="date" name="dob" value={student.dob} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <input type="text" name="department" value={student.department} onChange={handleChange} className="form-control" placeholder="Department" required />
        </div>
        <div className="mb-3">
          <input type="number" name="enrollmentYear" value={student.enrollmentYear} onChange={handleChange} className="form-control" placeholder="Enrollment Year" required />
        </div>
        <div className="form-check mb-3">
          <input type="checkbox" name="isActive" checked={student.isActive} onChange={handleChange} className="form-check-input" id="isActive" />
          <label className="form-check-label" htmlFor="isActive">Active</label>
        </div>
        <button type="submit" className="btn btn-primary">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
