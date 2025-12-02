import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">대학도서관 공간변화 동향 및 인식 연구</h1>
        <p className="hero-subtitle">
          2000년부터 2020년까지 대학도서관 공간변화의 특징을 분석하고, 사서들의 인식조사를 통해 향후 공간변화의 방향성을 제안합니다.
        </p>
        <div className="hero-buttons">
          <a href="#research" className="btn btn-primary">연구 내용 보기</a>
          <a href="#survey" className="btn btn-secondary">조사 결과</a>
        </div>
        <div className="hero-watermark"> </div>
      </div>
    </section>
  );
};

export default Hero;
