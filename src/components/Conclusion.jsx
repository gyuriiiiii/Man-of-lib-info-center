import React from 'react';
import './Conclusion.css';

const Conclusion = () => {
  const conclusions = [
    {
      number: 1,
      title: '학습과 연구를 위한 지식·정보 제공의 장소',
      description: '대학도서관의 본질적 역할을 유지하며 학술정보 제공의 중심 역할 수행',
    },
    {
      number: 2,
      title: '교육과 연구지원을 위한 학습공유공간',
      description: '협력적 학습과 지식 공유가 가능한 복합학습공간 지향',
    },
    {
      number: 3,
      title: '창의적 활동과 커뮤니티 장소',
      description: '취업, 창업, 진로 등 다양한 아이디어 교류와 협업 공간 제공',
    },
  ];

  return (
    <section className="conclusion">
      <div className="container">
        <h2 className="section-title">결론 및 제언</h2>
        <p className="conclusion-subtitle">대학도서관 공간의 궁극적 지향점</p>
        <div className="conclusion-grid">
          {conclusions.map((item, index) => (
            <div key={index} className="conclusion-item">
              <div className="conclusion-number">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="final-message">
          <p>대학도서관 공간은 시대의 변화와 이용자 요구를 수용하면서도 대학도서관의 정체성과 상징성을 유지해야 합니다. 과적화와 접단화만을 추구하기보다 대학도서관만의 차별화된 특징과 본래의 가치를 지켜나가는 것이 중요합니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
