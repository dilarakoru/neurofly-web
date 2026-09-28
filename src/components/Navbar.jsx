import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const toggleLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const navClass = `navbar ${isScrolled ? 'scrolled' : ''}`;

    return (
        <nav className={navClass} style={{
            background: isScrolled ? 'rgba(5, 10, 18, 0.95)' : 'rgba(5, 10, 18, 0.5)',
            boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
            backdropFilter: 'blur(16px)'
        }}>
            <div className="container nav-container">
                <Link onClick={() => setMobileMenuOpen(false)} to="/" className="logo">
                    <img src={`${import.meta.env.BASE_URL}drone.svg`} alt="NeuroFly Logo" onError={(e) => { e.target.style.display = 'none'; }} /> NeuroFly
                </Link>

                <button type="button" className="mobile-menu-btn" aria-label="Toggle navigation" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? "Close" : "Menu"}
                </button>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <Link onClick={() => setMobileMenuOpen(false)} to="/" className={location.pathname === '/' ? 'active' : ''}>{t('nav_home')}</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} to="/wiki" className={location.pathname === '/wiki' ? 'active' : ''}>{t('nav_wiki')}</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} to="/software" className={location.pathname === '/software' ? 'active' : ''}>{t('nav_software')}</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} to="/market" className={location.pathname === '/market' ? 'active' : ''}>{t('nav_market')}</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>{t('nav_contact')}</Link>

                    <div className="flex items-center gap-1" style={{ marginLeft: '20px', paddingLeft: '20px', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                        <button
                            onClick={() => toggleLanguage('en')}
                            style={{ background: 'none', border: 'none', color: i18n.language === 'en' ? 'var(--accent)' : 'var(--text-muted)', cursor: 'pointer', fontWeight: 'bold' }}
                        >EN</button>
                        <span style={{ color: 'var(--text-muted)' }}>|</span>
                        <button
                            onClick={() => toggleLanguage('tr')}
                            style={{ background: 'none', border: 'none', color: i18n.language === 'tr' ? 'var(--accent)' : 'var(--text-muted)', cursor: 'pointer', fontWeight: 'bold' }}
                        >TR</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
