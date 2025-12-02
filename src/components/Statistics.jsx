import React, { useEffect, useRef, useState } from 'react';
import './Statistics.css';

const Statistics = () => {
  const [counts, setCounts] = useState({ count1: 0, count2: 0, count3: 0 });
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            // 약간의 지연 후 애니메이션 시작
            setTimeout(() => {
              // Animate 99
              let count = 0;
              const interval1 = setInterval(() => {
                count++;
                setCounts((prev) => ({ ...prev, count1: count }));
                if (count >= 99) clearInterval(interval1);
              }, 15);

              // Animate 1조원
              setTimeout(() => {
                setCounts((prev) => ({ ...prev, count2: 1 }));
              }, 300);

              // Animate 61.6%
              let percent = 0;
              const interval3 = setInterval(() => {
                percent += 0.5;
                setCounts((prev) => ({ ...prev, count3: Math.min(percent, 61.6) }));
                if (percent >= 61.6) {
                  setCounts((prev) => ({ ...prev, count3: 61.6 }));
                  clearInterval(interval3);
                }
              }, 15);
            }, 200);
          }
        });
      },
      {
        threshold: 0.5, // 50% 이상 보일 때 트리거
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="statistics" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">공간변화 통계 분석</h2>
        <p className="section-subtitle">2003-2022년 대학도서관 공간변화 현황</p>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{counts.count1}</div>
            <div className="stat-label">총 공간변화 건수</div>
            <div className="stat-desc">2003년부터 2022년까지 전국 대학도서관</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{counts.count2}조원</div>
            <div className="stat-label">총 투입 예산</div>
            <div className="stat-desc">신축, 증축, 리모델링에 사용된 총액</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{counts.count3.toFixed(1)}%</div>
            <div className="stat-label">리모델링 비중</div>
            <div className="stat-desc">최근 건축재정으로 리모델링 증가</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
