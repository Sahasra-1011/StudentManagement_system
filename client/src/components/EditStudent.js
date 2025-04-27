// src/components/EditStudent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
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

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://student-mangment-abc.onrender.com/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.error('Error fetching student:', err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudent({
      ...student,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/students/${id}`, student);
      navigate('/list');
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center text-warning mb-4">Edit Student Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                name="studentId"
                className="form-control"
                placeholder="Student ID"
                value={student.studentId}
                onChange={handleChange}
                required
                readOnly
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                value={student.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                value={student.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={student.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="date"
                name="dob"
                className="form-control"
                value={student.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="department"
                className="form-control"
                placeholder="Department"
                value={student.department}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="number"
                name="enrollmentYear"
                className="form-control"
                placeholder="Enrollment Year"
                value={student.enrollmentYear}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <input
                type="checkbox"
                name="isActive"
                className="form-check-input me-2"
                checked={student.isActive}
                onChange={handleChange}
              />
              <label className="form-check-label">Active</label>
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn-primary px-4">Update Student</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
