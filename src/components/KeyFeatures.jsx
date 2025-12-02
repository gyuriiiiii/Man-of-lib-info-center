import React from 'react';
import './KeyFeatures.css';

const KeyFeatures = () => {
  const features = [
    {
      number: '01',
      title: '공간의 다양성 추구',
      description: '개인 공간과 협력 활동공간 등 이용자가 선택할 수 있는 다양한 공간 제공',
    },
    {
      number: '02',
      title: '휴식 및 체험공간 증가',
      description: '문화적 역할 강조에 따른 복합적 학습·문화공간 확대',
    },
    {
      number: '03',
      title: '공간 활용의 극대화',
      description: '유연성 추구를 통한 효율적 공간 운영',
    },
    {
      number: '04',
      title: '기능과 역할의 혼재',
      description: '하나의 공간에서 다양한 활동이 가능한 자유로운 구성',
    },
    {
      number: '05',
      title: '프라이버시 강조',
      description: '개인의 공간적 요구를 반영한 다양한 성격의 공간 제공',
    },
  ];

  return (
    <section className="key-features">
      <div className="container">
        <h2 className="section-title">공간변화의 주요 특징</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item fade-in">
              <div className="feature-number">{feature.number}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
