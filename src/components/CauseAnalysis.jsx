import React from 'react';
import './CauseAnalysis.css';

const CauseAnalysis = () => {
  const levels = [
    { number: 1, content: '시설의 노후화' },
    { number: 2, content: '다양한 공간 제공 필요' },
    { number: 3, content: '공간 부족 문제' },
    { number: 4, content: '이용자 요구 수용' },
    { number: 5, content: '공간 배치의 효율화' },
  ];

  return (
    <section className="cause-analysis">
      <div className="container">
        <h2 className="section-title">공간변화의 원인 분석</h2>
        <div className="pyramid">
          {levels.map((level, index) => (
            <div key={index} className={`pyramid-level level-${level.number}`}>
              <div className="level-number">{level.number}</div>
              <div className="level-content">{level.content}</div>
            </div>
          ))}
        </div>
        <p className="pyramid-caption">
          물리적 노후화와 시대적 노후화가 공간변화의 주요 원인으로 작용했습니다.
          1950-60년대 건립된 도서관 건물이 50여 년 경과하며 노후화가 진행되었고,
          디지털 시대의 요구와 이용자 성향 변화를 수용할 필요성이 제기되었습니다.
        </p>
      </div>
    </section>
  );
};

export default CauseAnalysis;
