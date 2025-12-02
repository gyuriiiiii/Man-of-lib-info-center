import React from 'react';
import './Importance.css';

const Importance = () => {
  return (
    <section className="importance">
      <div className="container">
        <h2 className="section-title">대학도서관 공간의 중요성</h2>
        <div className="split-layout">
          <div className="left-content">
            <h3>공간의 4가지 역할</h3>
            <ul className="role-list">
              <li><strong>영감의 공간:</strong> 의미 있고 감동적인 경험 제공</li>
              <li><strong>배움의 공간:</strong> 지식과 정보에 대한 무제한 접근</li>
              <li><strong>만남의 공간:</strong> 사회적 공감과 상호작용</li>
              <li><strong>창의적 공간:</strong> 혁신적 활동과 결과물 공유</li>
            </ul>
          </div>
          <div className="right-content">
            <div className="importance-box">
              <h3>공간의 의미</h3>
              <p>대학도서관 공간은 단순한 물리적 건축물이 아니라 특별한 '장소'이자 지식과 기억의 원천입니다. 대학의 교육과 연구, 학습의 중심지로서 시대 변화에 능동적으로 대처해야 합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Importance;
