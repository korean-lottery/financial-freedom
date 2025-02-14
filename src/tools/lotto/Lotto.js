import { useCallback, useState } from 'react';
import './Lotto.css'

function Lotto() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  // 로또 번호 생성 함수
  const generateLottoNumbers = useCallback(() => {
    const numbers = Array.from({ length: 45 }, (_, i) => i + 1);
    const shuffledNumbers = shuffleArray(numbers);
    const newNumbers = shuffledNumbers.slice(0, 6).sort((a, b) => a - b);
    setSelectedNumbers(newNumbers);
  }, []);

  // 배열을 섞는 함수 (피셔-예이츠 알고리즘)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const yellow = "#ffcc00"
  const blue = "#3498db"
  const red = "#e74c3c"
  const black = "#2c3e50"
  const green = "#2ecc71"

  // 번호에 따른 CSS 클래스 반환 함수
  function getColorHexCode(num) {
    if (num >= 1 && num <= 10) return yellow;
    if (num >= 11 && num <= 20) return blue;
    if (num >= 21 && num <= 30) return red;
    if (num >= 31 && num <= 40) return black;
    if (num >= 41 && num <= 45) return green;
    return "";
  }

  return (
    <div className="page-body">
      <div className="lotto-container">
        <h1>AI 로또 번호 추출기</h1>
        <button className="btn" onClick={generateLottoNumbers}>
          번호 추출하기
        </button>
        <div className="lotto-numbers">
          {selectedNumbers.map((num, index) => (
            <span key={index} style={{ backgroundColor: getColorHexCode(num) }} className={"lotto-ball"}>
              {num}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lotto;
