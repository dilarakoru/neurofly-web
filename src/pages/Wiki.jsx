import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Wiki.css'; // We will create this for specific wiki layout

const Wiki = () => {
    const { t } = useTranslation();
    const categories = t('wiki_categories', { returnObjects: true });
    const articles = t('wiki_articles', { returnObjects: true });

    const [selectedCategory, setSelectedCategory] = useState("Getting Started");
    const [selectedArticleId, setSelectedArticleId] = useState("getting-started-1");
    const [searchQuery, setSearchQuery] = useState("");

    // Group articles by category based on English keys as unique identifiers 
    // (In a real backend app, these would come from an API with IDs)
    const categorizedArticles = {
        "Getting Started": ["getting-started-1"],
        "PC Control": ["cfclient-intro", "cfclient-python", "cfclient-verify"],
        "Python Control": ["python-intro"]
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const currentArticle = articles[selectedArticleId];

    return (
        <div className="wiki-container animate-fade-in" style={{ paddingTop: 'var(--header-height)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Wiki Header */}
            <header className="wiki-header" style={{ padding: '40px 20px', backgroundColor: 'var(--secondary)', borderBottom: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{t('wiki_header')}</h1>
                <div className="search-bar" style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
                    <i className="fa-solid fa-search" style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}></i>
                    <input
                        type="text"
                        placeholder={t('wiki_search')}
                        aria-label={t('wiki_search')}
                        value={searchQuery}
                        onChange={handleSearch}
                        style={{ width: '100%', padding: '15px 15px 15px 50px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '1rem', outline: 'none' }}
                    />
                </div>
            </header>

            {/* Wiki Layout */}
            <div className="container" style={{ display: 'flex', flex: 1, gap: '40px', padding: '40px 20px' }}>

                {/* Sidebar */}
                <aside className="wiki-sidebar" style={{ width: '300px', flexShrink: 0 }}>
                    {Object.keys(categorizedArticles).map(categoryKey => {
                        // Filter articles by search query if needed
                        const visibleArticles = categorizedArticles[categoryKey].filter(articleId => {
                            const article = articles[articleId];
                            if (!searchQuery) return true;
                            return article.title.toLowerCase().includes(searchQuery) || article.content.toLowerCase().includes(searchQuery);
                        });

                        if (visibleArticles.length === 0) return null;

                        return (
                            <div key={categoryKey} className="wiki-category" style={{ marginBottom: '25px' }}>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '15px' }}>
                                    {categories[categoryKey]}
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {visibleArticles.map(articleId => (
                                        <li key={articleId} style={{ marginBottom: '8px' }}>
                                            <button
                                                onClick={() => {
                                                    setSelectedCategory(categoryKey);
                                                    setSelectedArticleId(articleId);
                                                    setSearchQuery("");
                                                }}
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                    color: selectedArticleId === articleId ? 'var(--accent)' : 'var(--text-muted)',
                                                    cursor: 'pointer',
                                                    textAlign: 'left',
                                                    width: '100%',
                                                    padding: '8px 12px',
                                                    borderRadius: '6px',
                                                    backgroundColor: selectedArticleId === articleId ? 'rgba(0, 212, 255, 0.1)' : 'transparent',
                                                    transition: 'var(--transition)',
                                                    fontSize: '0.95rem'
                                                }}
                                                onMouseOver={(e) => {
                                                    if (selectedArticleId !== articleId) {
                                                        e.target.style.color = 'var(--text-main)';
                                                        e.target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                                    }
                                                }}
                                                onMouseOut={(e) => {
                                                    if (selectedArticleId !== articleId) {
                                                        e.target.style.color = 'var(--text-muted)';
                                                        e.target.style.backgroundColor = 'transparent';
                                                    }
                                                }}
                                            >
                                                {articles[articleId].title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </aside>

                {/* Content Area */}
                <main className="wiki-content" style={{ flex: 1, backgroundColor: 'var(--secondary)', padding: '40px', borderRadius: 'var(--radius)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'var(--shadow-card)' }}>
                    {currentArticle ? (
                        <div className="article-body">
                            <div style={{ display: 'inline-block', padding: '5px 12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', color: 'var(--accent)', borderRadius: '20px', fontSize: '0.85rem', marginBottom: '15px', fontWeight: '500' }}>
                                {categories[selectedCategory]}
                            </div>
                            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'var(--text-main)', background: 'none', WebkitTextFillColor: 'initial' }}>{currentArticle.title}</h1>

                            {/* Render HTML content safely */}
                            <div
                                className="markdown-content"
                                dangerouslySetInnerHTML={{ __html: currentArticle.content }}
                                style={{ lineHeight: '1.8', color: 'var(--text-muted)', fontSize: '1.1rem' }}
                            />
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '50px' }}>
                            <i className="fa-solid fa-file-circle-question" style={{ fontSize: '3rem', marginBottom: '20px', opacity: 0.5 }}></i>
                            <p>No content selected.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Wiki;
