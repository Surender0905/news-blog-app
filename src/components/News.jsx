import Weather from "./Weather";
import Calender from "./Calender";
import userImg from "../assets/profile-pic.png";
import noImage from "../assets/no-img.png";

import axios from "axios";
import "./News.css";
import { useState, useEffect } from "react";

const categories = [
    "general",
    "world",
    "business",
    "technology",
    "science",
    "health",
    "sports",
    "entertainment",
    "nation",
];

const News = () => {
    const [headline, setHeadline] = useState(null);
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("General");

    //useEffect
    useEffect(() => {
        const fetchNews = async () => {
            const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=9fe9166bf46b21105765f32f80498584`;
            try {
                const res = await axios.get(url);
                const fetchedNews = res.data.articles;
                console.log(fetchedNews);
                fetchedNews.forEach((article) => {
                    if (!article.image) {
                        article.image = noImage;
                    }
                });
                setHeadline(fetchedNews[0]);
                setNews(fetchedNews.slice(1, 7));
            } catch (error) {
                console.log(error);
            }
        };
        fetchNews();
    }, [category]);

    const handleCategoryChange = (e, category) => {
        e.preventDefault();
        setCategory(category);
    };
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
                    <div className="user">
                        <img src={userImg} alt="profile pic" />
                        <p>Surender&#39;s Blog</p>
                    </div>
                    <div className="categories">
                        <h1 className="nav-heading">Categories</h1>
                        <div className="nav-links">
                            {categories.map((category, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="nav-link"
                                    onClick={(e) =>
                                        handleCategoryChange(e, category)
                                    }
                                >
                                    {category}
                                </a>
                            ))}

                            <a href="#" className="nav-link">
                                Bookmarks{" "}
                                <i className="fa-regular fa-bookmark"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* News Section */}
                <div className="news-section">
                    {headline && (
                        <div className="headline">
                            <img
                                src={headline.image || noImage}
                                alt={headline.title}
                            />
                            <h2 className="headline-title">
                                {headline.title}
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </h2>
                        </div>
                    )}

                    <div className="news-grid">
                        {news &&
                            news.map((article, index) => (
                                <div key={index} className="news-item">
                                    <img
                                        src={article.image || noImage}
                                        alt={article.title}
                                    />
                                    <h3>
                                        {article.title}
                                        <i className="fa-regular fa-bookmark bookmark"></i>
                                    </h3>
                                </div>
                            ))}
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
