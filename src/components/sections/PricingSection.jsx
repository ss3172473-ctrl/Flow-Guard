import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingSection = () => {
    return (
        <section id="pricing" className="pricing-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">PRICING</span>
                    <h2>합리적인 가격으로<br />시작하세요</h2>
                    <p>우리 아이의 집중력을 위한 최고의 투자</p>
                </div>

                <div className="pricing-card-wrapper">
                    <motion.div
                        className="pricing-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="pricing-header">
                            <h3>Premium Plan</h3>
                            <div className="price">
                                <span className="currency">₩</span>
                                <span className="amount">99,000</span>
                                <span className="period">/월</span>
                            </div>
                            <p className="price-desc">모든 기능을 제한 없이 이용하세요.</p>
                        </div>

                        <div className="pricing-features">
                            <div className="feature-item">
                                <div className="check-icon"><Check size={16} /></div>
                                <span>실시간 AI 집중도 분석 (무제한)</span>
                            </div>
                            <div className="feature-item">
                                <div className="check-icon"><Check size={16} /></div>
                                <span>일간/주간/월간 심층 리포트</span>
                            </div>
                            <div className="feature-item">
                                <div className="check-icon"><Check size={16} /></div>
                                <span>학습 태도 및 정서 분석</span>
                            </div>
                            <div className="feature-item">
                                <div className="check-icon"><Check size={16} /></div>
                                <span>전문가 1:1 코칭권 제공 (월 1회)</span>
                            </div>
                            <div className="feature-item">
                                <div className="check-icon"><Check size={16} /></div>
                                <span>부모님 전용 모바일 대시보드</span>
                            </div>
                        </div>

                        <button className="pricing-cta" onClick={() => document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' })}>
                            지금 시작하기
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
