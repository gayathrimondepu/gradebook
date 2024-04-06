// MainBlock.js
import React, { useState } from 'react';
import Table from './Table';
import Options from './Options';
import StatisticsBlock from './StatisticsBlock';
import studentsData from '../data';

function MainBlock() {
  const [students, setStudents] = useState(studentsData);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showStatistics, setShowStatistics] = useState(false);

  const handleRowClick = (student) => {
    setSelectedRow(student.id);
  };

  const toggleStatistics = () => {
    setShowStatistics(!showStatistics);
  };

  return (
    <div className="MainBlock">
      <Options students={students} setStudents={setStudents} />
      <Table
        students={students}
        setStudents={setStudents}
        setSelectedRow={setSelectedRow}
        selectedRow={selectedRow}
        handleRowClick={handleRowClick}
      />
      {showStatistics && <StatisticsBlock students={students} />}
      <button className="showStatisticsButton" onClick={toggleStatistics}>{showStatistics ? 'Hide Statistics' : 'Show Statistics'}</button>
    </div>
  );
}

export default MainBlock;
