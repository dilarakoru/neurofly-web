import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer style={{ backgroundColor: 'var(--secondary)', padding: '80px 0 40px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>

                    <div className="footer-brand" style={{ gridColumn: '1 / -1', '@media (min-width: 768px)': { gridColumn: 'span 2' } }}>
                        <h4 style={{ color: 'var(--text-main)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem' }}>
                            <img src={`${import.meta.env.BASE_URL}drone.svg`} alt="NeuroFly Logo" style={{ height: '35px' }} onError={(e) => { e.target.style.display = 'none'; }} />
                            NeuroFly
                        </h4>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '300px' }}>
                            {t('footer_desc')}
                        </p>
                    </div>

                    <div className="footer-links">
                        <h5 style={{ color: 'white', marginBottom: '20px', fontSize: '1.2rem' }}>{t('footer_res')}</h5>
                        <ul>
                            <li style={{ marginBottom: '12px' }}><Link to="/wiki" style={{ color: 'var(--text-muted)' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>{t('footer_doc')}</Link></li>
                            <li style={{ marginBottom: '12px' }}><Link to="/software" style={{ color: 'var(--text-muted)' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>{t('nav_software')}</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="copyright" style={{ textAlign: 'center', paddingTop: '30px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <p>{t('footer_copy')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
