import React, { useEffect, useRef } from 'react';
import './Survey.css';

const Survey = () => {
  const circlesRef = useRef([]);
  const intervalRefs = useRef([]);
  const isVisible = useRef(false);

  useEffect(() => {
    const animateCircle = (circle, percent) => {
      // 0으로 리셋
      circle.style.strokeDasharray = '0, 100';

      // 300ms 후 목표값까지 애니메이션
      setTimeout(() => {
        circle.style.strokeDasharray = `${percent}, 100`;
      }, 300);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.current) {
            isVisible.current = true;

            // 모든 차트에 대해 반복 애니메이션 시작
            circlesRef.current.forEach((chartElement, index) => {
              if (chartElement) {
                const circle = chartElement.querySelector('.circle');
                const percent = chartElement.getAttribute('data-percent');

                if (circle && percent) {
                  // 즉시 첫 애니메이션 시작
                  animateCircle(circle, percent);

                  // 5초마다 반복
                  intervalRefs.current[index] = setInterval(() => {
                    animateCircle(circle, percent);
                  }, 5000);
                }
              }
            });
          } else if (!entry.isIntersecting && isVisible.current) {
            // 화면에서 벗어나면 애니메이션 중지
            isVisible.current = false;
            intervalRefs.current.forEach(interval => {
              if (interval) clearInterval(interval);
            });
            intervalRefs.current = [];
          }
        });
      },
      {
        threshold: 0.3, // 30% 이상 보일 때 트리거
        rootMargin: '0px'
      }
    );

    // survey 섹션 전체를 관찰
    const surveySection = document.querySelector('#survey');
    if (surveySection) {
      observer.observe(surveySection);
    }

    return () => {
      observer.disconnect();
      intervalRefs.current.forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  return (
    <section id="survey" className="survey">
      <div className="container">
        <h2 className="section-title">사서 인식조사 결과</h2>
        <div className="survey-info">
          <div className="survey-details">
            <h3>조사 개요</h3>
            <ul>
              <li><strong>기간:</strong> 2021년 9월 7일 ~ 10월 1일</li>
              <li><strong>대상:</strong> 국공립 및 사립대학도서관 사서</li>
              <li><strong>응답자:</strong> 121명</li>
              <li><strong>방법:</strong> 온라인 설문조사</li>
            </ul>
          </div>
          <div className="survey-results">
            <div className="result-circle">
              <div className="circle-chart" data-percent="89.2" ref={(el) => (circlesRef.current[0] = el)}>
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle"
                    strokeDasharray="0, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className="percentage">89.2%</text>
                </svg>
                <p className="chart-label">공정적 평가</p>
                <p className="chart-desc">공간변화가 바람직하다고 응답</p>
              </div>
            </div>
            <div className="result-circle">
              <div className="circle-chart" data-percent="95.8" ref={(el) => (circlesRef.current[1] = el)}>
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle"
                    strokeDasharray="0, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className="percentage">95.8%</text>
                </svg>
                <p className="chart-label">공정적 영향</p>
                <p className="chart-desc">도서관 역할과 위상에 긍정적 영향 예상</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Survey;
