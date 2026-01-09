import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { motion } from 'framer-motion';
import { Eye, AlertTriangle, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/StudentApp.css';

const StudentApp = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accessCode, setAccessCode] = useState('');
    const [focusScore, setFocusScore] = useState(100);
    const [isFocusing, setIsFocusing] = useState(true);

    // Login Handler
    const handleLogin = (e) => {
        e.preventDefault();
        if (accessCode.trim().length > 0) {
            setIsLoggedIn(true);
        } else {
            alert("참여 코드를 입력해주세요.");
        }
    };

    // Logout Handler
    const handleLogout = () => {
        if (confirm("학습을 종료하시겠습니까?")) {
            setIsLoggedIn(false);
            setAccessCode('');
        }
    };

    // Mock Focus Score Simulation
    useEffect(() => {
        if (!isLoggedIn) return;

        const interval = setInterval(() => {
            // Randomly fluctuate focus score slightly to look alive
            setFocusScore(prev => {
                const change = (Math.random() - 0.5) * 5;
                const newValue = Math.min(100, Math.max(0, prev + change));
                return parseFloat(newValue.toFixed(1));
            });

            // Randomly flip "Focusing" state rarely
            if (Math.random() > 0.95) {
                setIsFocusing(prev => !prev);
            } else {
                setIsFocusing(true);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return (
            <div className="login-screen">
                <div className="login-card">
                    <div className="login-header">
                        <h1 className="login-title">FlowGuard Student</h1>
                        <p className="login-desc">학부모님께 전달받은 코드를 입력하세요</p>
                    </div>
                    <form onSubmit={handleLogin} className="login-form">
                        <div>
                            <input
                                type="text"
                                value={accessCode}
                                onChange={(e) => setAccessCode(e.target.value)}
                                placeholder="참여 코드 입력"
                                className="login-input"
                            />
                        </div>
                        <button
                            type="submit"
                            className="login-btn"
                        >
                            학습 시작하기
                        </button>
                        <div className="text-center">
                            <Link to="/" className="back-link">메인으로 돌아가기</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="student-app">
            {/* Top Bar */}
            <header className="app-header">
                <div className="logo-area">
                    <div className="live-dot"></div>
                    <span className="app-title">Live Analysis</span>
                </div>
                <button
                    onClick={handleLogout}
                    className="logout-btn"
                    title="학습 종료"
                >
                    <LogOut size={20} />
                </button>
            </header>

            {/* Main Content */}
            <main className="app-main">
                {/* Left: Webcam & Analysis */}
                <div className="webcam-section">
                    <div className="webcam-container">
                        <Webcam
                            audio={false}
                            className="webcam-view"
                        />
                        {/* Overlay UI */}
                        <div className="overlay-status">
                            {isFocusing ? (
                                <div className="status-active">
                                    <Eye size={16} />
                                    <span>Tracking Active</span>
                                </div>
                            ) : (
                                <div className="status-warning">
                                    <AlertTriangle size={16} />
                                    <span>Check Position</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3 className="stat-label">Current Focus Score</h3>
                            <div className="stat-value-group">
                                <span className="stat-value">{focusScore}</span>
                                <span className="stat-sub">/ 100</span>
                            </div>
                            <div className="progress-bar">
                                <motion.div
                                    className="progress-fill"
                                    animate={{ width: `${focusScore}%` }}
                                    transition={{ duration: 1 }}
                                />
                            </div>
                        </div>

                        <div className="stat-card">
                            <h3 className="stat-label">Study Time</h3>
                            <div className="stat-value">00:42:15</div>
                            <div className="stat-sub">오늘의 목표: 2시간</div>
                        </div>
                    </div>
                </div>

                {/* Right: Messages/Status (Simulated) */}
                <div className="sidebar">
                    <h3 className="sidebar-title">System Log</h3>
                    <div className="log-list">
                        <div className="log-item log-msg-normal">
                            <span className="log-time">15:42</span>
                            <div>학습이 시작되었습니다.</div>
                        </div>
                        <div className="log-item log-msg-success">
                            <span className="log-time">15:45</span>
                            <div>집중도가 90% 이상 유지되고 있습니다! 🔥</div>
                        </div>
                        <div className="log-item log-msg-normal">
                            <span className="log-time">16:00</span>
                            <div>15분 경과. 자세가 바릅니다.</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentApp;
