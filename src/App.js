import React from 'react';
import './App.css';

import Bai1_Hooks from './components/Bai1_Hooks';
import Bai2_Fetch from './components/Bai2_Fetch';
import Bai2_Async from './components/Bai2_Async';
import Bai2_Axios from './components/Bai2_Axios';

function App() {
  return (
    <div className="app-wrapper">
      <div className="header-info">
        <h1 style={{color: '#d35400', textTransform: 'uppercase'}}>Bài Tập Ôn Tập Giữa Kỳ</h1>
        <div style={{fontSize: '1.2rem', marginTop: '15px', lineHeight: '1.6'}}>
            <p>Sinh viên: <b style={{color: '#2980b9'}}>Vũ Trần Đức Nghĩa</b></p>
            <p>MSSV: <b>23637711</b> &nbsp;|&nbsp; Lớp: <b>DHKTPM19ATT</b></p>
        </div>
        <hr style={{width: '60%', margin: '20px auto', borderTop: '2px dashed #ccc'}} />
      </div>

      {/* --- PHẦN 1: HOOKS --- */}
      <h2 style={{textAlign: 'center', color: '#2c3e50'}}>PHẦN 1: DEMO HOOKS (React Core)</h2>
      <Bai1_Hooks />

      {/* --- PHẦN 2: API --- */}
      <h2 style={{textAlign: 'center', margin: '50px 0 20px 0', color: '#2c3e50'}}>PHẦN 2: DEMO API (Fetch, Async, Axios)</h2>
      <div className="section-grid">
        <Bai2_Fetch />
        <Bai2_Async />
        <Bai2_Axios />
      </div>

      <div style={{textAlign: 'center', margin: '50px 0', color: '#999'}}>
        <p>End of Report - Vũ Trần Đức Nghĩa</p>
      </div>
    </div>
  );
}

export default App;