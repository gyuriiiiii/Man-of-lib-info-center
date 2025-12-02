import React from 'react';
import './Direction.css';

const Direction = () => {
  return (
    <section className="direction">
      <div className="container">
        <h2 className="section-title">공간변화의 방향성</h2>
        <div className="direction-flow">
          <div className="direction-box">
            <div className="number-badge">1</div>
            <h3>차별성 확보</h3>
            <p>대학 간 차별성, 상업시설과의 차별성, 경험의 차별성을 통해 대학도서관만의 정체성 구현</p>
          </div>
          <div className="arrow">→</div>
          <div className="direction-box">
            <div className="number-badge">2</div>
            <h3>수용성 기반</h3>
            <p>기술 발달과 이용행태 변화에 능동적으로 대응하는 미래지향적 공간 인식</p>
          </div>
          <div className="arrow">→</div>
          <div className="direction-box">
            <div className="number-badge">3</div>
            <h3>상징성 유지</h3>
            <p>대학의 심장으로서 위상 확보, 가치와 존재 이유를 증명하는 공간</p>
          </div>
        </div>
        <div className="direction-quote">
          "대학도서관 공간은 단순히 물리적 형태를 갖춘 건축물이 아니라 특별한 '장소'이자 거대한 장서를 담고 있는 지식과 기억의 원천입니다."
        </div>
      </div>
    </section>
  );
};

export default Direction;
