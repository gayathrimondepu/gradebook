// Header.js
import React from 'react';

function Header() {
  const examInfo = {
    title: 'Exam',
    date: 'April 15, 2024',
    professor: 'Dr. Abc',
    college: 'K L University',
    department: 'Computer Science',
    semester: 'Even 2024',
    group: 'Group A',
  };

  return (
    <div className="Header">
      <h1>{examInfo.title}</h1>
      <div className="details">
        <p><strong>Date:</strong> {examInfo.date}</p>
        <p><strong>Professor:</strong> {examInfo.professor}</p>
        <p><strong>College:</strong> {examInfo.college}</p>
        <p><strong>Department:</strong> {examInfo.department}</p>
        <p><strong>Semester:</strong> {examInfo.semester}</p>
        <p><strong>Group:</strong> {examInfo.group}</p>
      </div>
    </div>
  );
}

export default Header;
