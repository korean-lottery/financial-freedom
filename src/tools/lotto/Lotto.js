import './Lotto.css'

function Lotto() {
  return (
    <div class="lotto-body">
      <div class="lotto-container">
        <h1>AI 로또 번호 추출기</h1>
        <button id="generateBtn" class="btn" onClick={generateLottoNumbers}>번호 추출하기</button>
        <div id="lottoNumbers" class="lotto-numbers">
          {/* 랜덤 로또 번호가 여기에 표시됩니다 */}
        </div>
      </div>
    </div>
  );
}

function generateLottoNumbers() {
  // 1부터 45까지의 번호를 배열로 만듭니다.
  const numbers = Array.from({ length: 45 }, (_, i) => i + 1);

  // 번호들을 섞습니다.
  const shuffledNumbers = shuffleArray(numbers);

  // 첫 6개 번호를 추출합니다.
  const selectedNumbers = shuffledNumbers.slice(0, 6);

  // 번호를 오름차순으로 정렬합니다.
  selectedNumbers.sort((a, b) => a - b);

  // 화면에 표시할 로또 번호 요소를 가져옵니다.
  const lottoNumbersContainer = document.getElementById('lottoNumbers');
  lottoNumbersContainer.innerHTML = '';  // 기존 번호들 제거

  // 번호들을 화면에 표시합니다.
  selectedNumbers.forEach(num => {
    const numElement = document.createElement('span');
    numElement.textContent = num;

    // 번호에 맞는 색상을 설정합니다.
    numElement.style.backgroundColor = getColorForNumber(num);

    lottoNumbersContainer.appendChild(numElement);
  });
}

// 배열을 섞는 함수 (피셔-예이츠 알고리즘)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 번호에 맞는 색상 반환 함수
function getColorForNumber(num) {
  if (num >= 1 && num <= 10) {
    return "#ffcc00"; // 노란색
  } else if (num >= 11 && num <= 20) {
    return "#3498db"; // 파란색
  } else if (num >= 21 && num <= 30) {
    return "#e74c3c"; // 빨간색
  } else if (num >= 31 && num <= 40) {
    return "#2c3e50"; // 검은색
  } else if (num >= 41 && num <= 45) {
    return "#2ecc71"; // 초록색
  }
  return "#ffcc00"; // 기본 색상 (예외 처리)
}

export default Lotto;
