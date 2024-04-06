import React, { useState } from 'react';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import StatisticsBlock from './components/StatisticsBlock';
import Footer from './components/Footer';
import studentsData from './data';

function App() {
  const [students, setStudents] = useState(studentsData);
  const [showStatistics, setShowStatistics] = useState(false);

  return (
    <div className="App">
      <Header />
      <MainBlock students={students} setStudents={setStudents} showStatistics={showStatistics} setShowStatistics={setShowStatistics} />
      {showStatistics && <StatisticsBlock students={students} />}
      <Footer />
    </div>
  );
}

export default App;
