import React from 'react';
import { motion } from 'framer-motion';
import review1 from '../../assets/review_capture_1.png';
import review2 from '../../assets/review_capture_2.png';
import review3 from '../../assets/review_capture_3.png';

const SocialProofSection = () => (
    <section className="social-proof">
        <motion.div
            className="container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="section-header white">
                <span className="section-badge">Social Proof</span>
                <h2 style={{ color: 'white' }}>이미 많은 부모님들이 직접 경험하고 계십니다</h2>
            </div>

            <div className="reviews-grid">
                {[review1, review2, review3].map((img, index) => (
                    <motion.div
                        key={index}
                        className="review-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                    >
                        <img src={img} alt={`User review ${index + 1}`} />
                    </motion.div>
                ))}
            </div>
            <div className="pricing">
                <h3>하루 3,300원</h3>
                <p>아이의 10년 뒤 성적을 바꾸는 가장 저렴한 보험</p>
                <motion.button
                    className="final-cta highlight-pulse"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' })}
                >
                    내 아이 전두엽 깨우기, 지금 시작하세요
                </motion.button>
            </div>
        </motion.div>
    </section>
);

export default SocialProofSection;
