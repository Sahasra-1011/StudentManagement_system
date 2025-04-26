import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await fetch('http://localhost:5000/api/students');
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      await fetch(`http://localhost:5000/api/students/${id}`, {
        method: 'DELETE',
      });
      alert('Student deleted!');
      fetchStudents();
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Student List</h2>
        <Link to="/add" className="btn btn-success">Add New Student</Link>
      </div>
      <table className="table table-bordered table-hover shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Department</th>
            <th>Enrollment Year</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu._id}>
              <td>{stu.studentId}</td>
              <td>{stu.firstName} {stu.lastName}</td>
              <td>{stu.email}</td>
              <td>{stu.dob}</td>
              <td>{stu.department}</td>
              <td>{stu.enrollmentYear}</td>
              <td>{stu.isActive ? 'Yes' : 'No'}</td>
              <td>
                <Link to={`/edit/${stu._id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button onClick={() => handleDelete(stu._id)} className="btn btn-danger btn-sm my-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
