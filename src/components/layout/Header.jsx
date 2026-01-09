import React from 'react';
import { Shield, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header glass">
        <div className="container header-content">
            <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield size={24} className="logo-icon" />
                <span>FlowGuard</span>
            </Link>
            <nav className="desktop-nav">
                <a href="/#problem">위험성</a>
                <a href="/#solution">AI솔루션</a>
                <a href="/#system">시스템</a>
                <a href="/#report">리포트</a>
            </nav>
            <div style={{ display: 'flex', gap: '12px' }}>
                <Link to="/student" className="cta-button" style={{
                    backgroundColor: 'var(--primary-deep-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                }}>
                    <User size={18} />
                    학생 입장
                </Link>
                <button className="cta-button" onClick={() => {
                    const el = document.getElementById('consultation');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.href = '/#consultation';
                }}>내 아이 집중력 MRI 촬영하기</button>
            </div>
        </div>
    </header>
);

export default Header;
