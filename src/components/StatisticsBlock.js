import React from 'react';

function StatisticsBlock({ students }) {
  const totalStudents = students.length;
  const passedStudents = students.filter(student => (0.6 * student.examGrade + 0.4 * student.ratingGrade) >= 4).length;
  const failedStudents = totalStudents - passedStudents;
  const grades = students.map(student => (0.6 * student.examGrade + 0.4 * student.ratingGrade));
  const averageGrade = grades.reduce((acc, grade) => acc + grade, 0) / totalStudents;
  const maxGrade = Math.max(...grades);
  const minGrade = Math.min(...grades);

  return (
    <div className="StatisticsBlock">
      <h3>Statistics</h3>
      <p>Total Students: {totalStudents}</p>
      <p>Passed Students: {passedStudents}</p>
      <p>Failed Students: {failedStudents}</p>
      <p>Average Grade: {isNaN(averageGrade) ? 'NaN' : averageGrade.toFixed(2)}</p>
      <p>Max Grade: {isNaN(maxGrade) ? 'NaN' : maxGrade.toFixed(2)}</p>
      <p>Min Grade: {isNaN(minGrade) ? 'NaN' : minGrade.toFixed(2)}</p>
    </div>
  );
}

export default StatisticsBlock;
