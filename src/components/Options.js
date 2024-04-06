import React from 'react';

function Options({ students, setStudents }) {
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    const sortedStudents = [...students].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });
    setStudents(sortedStudents);
  };

  const handleFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    const filteredStudents = students.filter((student) =>
      student.name.toLowerCase().includes(filterValue)
    );
    setStudents(filteredStudents);
  };

  return (
    <div className="Options">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="examGrade">Exam Grade</option>
        <option value="ratingGrade">Rating Grade</option>
      </select>

      <label htmlFor="filter">Filter by Name:</label>
      <input type="text" id="filter" onChange={handleFilterChange} />
    </div>
  );
}

export default Options;
