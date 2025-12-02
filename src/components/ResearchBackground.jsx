import React, { useEffect, useRef } from 'react';
import './ResearchBackground.css';

const ResearchBackground = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="research" className="research-bg">
      <div className="container">
        <h2 className="section-title">연구 배경 및 목적</h2>
        <div className="cards-grid">
          <div className="card fade-in" ref={(el) => (cardsRef.current[0] = el)}>
            <h3>공간변화의 지속</h3>
            <p>2000년대 초반부터 시작된 대학도서관 공간변화는 여전히 진행 중이며, 총 1조원의 예산이 투입되었습니다.</p>
          </div>
          <div className="card fade-in" ref={(el) => (cardsRef.current[1] = el)}>
            <h3>연구의 필요성</h3>
            <p>공간변화에 대한 종합적 분석이 부족하여 동향 파악과 방향성 제시가 필요합니다.</p>
          </div>
          <div className="card fade-in" ref={(el) => (cardsRef.current[2] = el)}>
            <h3>핵심 질문</h3>
            <p>대학도서관 공간이 어떤 방향으로, 어떤 목적을 위해 변화해야 하는가?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchBackground;
