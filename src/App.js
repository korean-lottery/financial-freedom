import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Lotto from "./tools/lotto/Lotto";

function App() {
  const [activeIndex, setActiveIndex] = useState(null); // 선택된 li의 index

  const handleClick = (index) => {
    setActiveIndex(index); // 클릭된 li의 index 업데이트
  };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav class="navbar">
            <div class="navbar_logo">
              <i class="fa fa-diamond" aria-hidden="true"></i>
              <a href="#">경제적 자유</a>
            </div>

            <ul class="navbar__menu">
              {["로또 번호 추출기"].map((item, index) => (
                <li
                  key={index}
                  className={activeIndex === index ? "active" : ""}
                  onClick={() => handleClick(index)}
                >
                  <Link to="/tools/lotto">로또 번호 추출기</Link>
                </li>
              ))}
            </ul>

            <a href="#" class="navbar__toggleBtn" onClick={handleClick} onMouseOver={handleClick}>
              <i class="fa fa-bars"></i>
            </a>
          </nav>
          <Routes>
            <Route path="/tools/lotto" element={<Lotto />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
