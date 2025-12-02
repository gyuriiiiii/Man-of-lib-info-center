import React from 'react';
import './Effects.css';

const Effects = () => {
  return (
    <section className="effects">
      <div className="container"> 
        <h2 className="section-title">공간변화의 효과와 문제점</h2>
        <div className="effects-layout">
          <div className="effects-card positive">
            <h3>주요 효과 (장점)</h3>
            <ul>
              <li>이용자를 위한 새로운 공간 제공 (82.4%)</li>
              <li>도서관 방문자 수 증가 (59.8%)</li>
              <li>도서관 위상과 역할 인식 증대 (42.2%)</li>
              <li>열람석 및 서가 공간의 충분한 확보 (35.3%)</li>
            </ul>
          </div>
          <div className="effects-card negative">
            <h3>주요 문제점 (단점)</h3>
            <ul>
              <li>도서관 관리 인원 부족 (54.9%)</li>
              <li>관리 공간 확대로 업무부담 가중 (51.0%)</li>
              <li>시설 유지비용 증가 (48.0%)</li>
              <li>시대적 트렌드만 반영, 본질 변화 부족</li>
              <li>도서관 공간의 획일화와 특성 소실</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Effects;
