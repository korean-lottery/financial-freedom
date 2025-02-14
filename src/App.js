import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Lotto from "./tools/lotto/Lotto";
import { faLineChart, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // 화면 크기 체크 (예: 768px 이상이면 PC로 간주)
      if (window.innerWidth >= 768) {
        setActive(true);  // PC일 때
      } else {
        setActive(false);  // 모바일일 때
      }
    };

    // 컴포넌트가 마운트될 때 초기 설정
    handleResize();
    // resize 이벤트 리스너 추가
    window.addEventListener('resize', handleResize);
    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  const toggleMenus = () => {
    setActive(!isActive);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav class="navbar">
            <Link to="/" class="navbar__logo">
              <FontAwesomeIcon icon={faLineChart} size='2x' />
              <span style={{ fontSize: 25, marginLeft: 10 }}>경제적 자유</span>
            </Link>
            {isActive ?
              <ul class="navbar__menu">
                {["로또 번호 추출기"].map((item, index) => (
                  <li
                    key={index}
                    className={"navbar__menu"}
                  >
                    <Link to="/tools/lotto">로또 번호 추출기</Link>
                  </li>
                ))}
              </ul> : null}

            <button class="navbar__toggleBtn" onClick={toggleMenus}>
              <FontAwesomeIcon icon={faBars} />
            </button>
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
