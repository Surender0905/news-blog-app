import React from "react";
import Weather from "./Weather";
import Calender from "./Calender";
import "./News.css";

const News = () => {
    return (
        <div className="news">
            <header className="news-header">
                <h1 className="logo">News & Blogs</h1>
                <div className="search-bar">
                    <form action="">
                        <input type="text" placeholder="Search News..." />
                        <button type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </header>
            <div className="news-content">
                <div className="navbar">
                    <div className="user">user</div>
                    <div className="categories">categories</div>
                </div>
                {/* News Section */}
                <div className="news-section">
                    <div className="headline">headline</div>
                    <div className="news-grid">
                        <div className="news-item">news item</div>
                        <div className="news-item">news item</div>
                        <div className="news-item">news item</div>
                        <div className="news-item">news item</div>
                    </div>
                </div>
                {/* End of News Section */}

                {/* My Blogs */}
                <div className="my-blogs">
                    <div className="blog">blog</div>
                    <div className="blog">blog</div>
                    <div className="blog">blog</div>
                    <div className="blog">blog</div>
                </div>

                {/* End of My Blogs */}
                <div className="weather-calendar">
                    <Weather />

                    <Calender />
                </div>
            </div>
            {/* Footer */}
            <footer className="news-footer">
                <div className="footer-content">footer content</div>
            </footer>
            {/* End of Footer */}
        </div>
    );
};

export default News;
