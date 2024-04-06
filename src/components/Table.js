import React, { useState } from 'react';
import '../styles.css';

function Table({ students }) {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleDetailsClick = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseDetails = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Ticket's number</th>
            <th>Rating grade</th>
            <th>Exam grade</th>
            <th>Final grade</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.ticketNumber}</td>
              <td>{student.ratingGrade}</td>
              <td>{student.examGrade}</td>
              <td>{(0.6 * student.examGrade + 0.4 * student.ratingGrade).toFixed(2)}</td>
              <td>{(0.6 * student.examGrade + 0.4 * student.ratingGrade) >= 4 ? 'Passed' : 'Failed'}</td>
              <td><button onClick={() => handleDetailsClick(student)}>Details</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedStudent && (
        <div className="DetailsCard">
          <div className="DetailsCardContent">
            <button onClick={handleCloseDetails} className="CloseButton">Close</button>
            <h2>{selectedStudent.name}</h2>
            <p>Ticket's number: {selectedStudent.ticketNumber}</p>
            <p>Rating grade: {selectedStudent.ratingGrade}</p>
            <p>Exam grade: {selectedStudent.examGrade}</p>
            <p>Final grade: {(0.6 * selectedStudent.examGrade + 0.4 * selectedStudent.ratingGrade).toFixed(2)}</p>
            <p>Status: {(0.6 * selectedStudent.examGrade + 0.4 * selectedStudent.ratingGrade) >= 4 ? 'Passed' : 'Failed'}</p>
            <p>Comments: {selectedStudent.comments}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
