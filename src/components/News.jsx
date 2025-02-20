import Weather from "./Weather";
import Calender from "./Calender";
import userImg from "../assets/profile-pic.png";
import noImage from "../assets/no-img.png";

import axios from "axios";
import "./News.css";
import { useState, useEffect } from "react";
import NewsModal from "./NewsModal";
import Bookmarks from "./Bookmarks";

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
    const [search, setSearch] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    const [bookmarks, setBookmarks] = useState([]);
    const [showBookmarks, setShowBookmarks] = useState(false);

    //useEffect
    useEffect(() => {
        const fetchNews = async () => {
            let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=9fe9166bf46b21105765f32f80498584`;

            if (searchQuery) {
                url = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&apikey=9fe9166bf46b21105765f32f80498584`;
            }
            try {
                const res = await axios.get(url);
                const fetchedNews = res.data.articles;

                fetchedNews.forEach((article) => {
                    if (!article.image) {
                        article.image = noImage;
                    }
                });
                setHeadline(fetchedNews[0]);
                setNews(fetchedNews.slice(1, 7));

                const storedBookmarks = JSON.parse(
                    localStorage.getItem("bookmarks") || [],
                );

                if (storedBookmarks) {
                    setBookmarks(storedBookmarks);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchNews();
    }, [category, searchQuery]);

    const handleCategoryChange = (e, category) => {
        e.preventDefault();
        setCategory(category);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(search);
        setSearch("");
    };

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
        setShowModal(true);
    };

    const handleBookmarkClick = (article) => {
        setBookmarks((prev) => {
            const updatedBookmarks = prev.find(
                (bookmark) => bookmark.title === article.title,
            )
                ? prev.filter((bookmark) => bookmark.title !== article.title)
                : [...prev, article];

            //save to local storage
            localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
            return updatedBookmarks;
        });
    };
    return (
        <div className="news">
            <header className="news-header">
                <h1 className="logo">News & Blogs</h1>
                <div className="search-bar">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search News..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
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

                            <a
                                href="#"
                                className="nav-link"
                                onClick={() => setShowBookmarks(true)}
                            >
                                Bookmarks{" "}
                                <i className="fa-solid fa-bookmark"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* News Section */}
                <div className="news-section">
                    {headline && (
                        <div
                            className="headline"
                            onClick={() => handleArticleClick(headline)}
                        >
                            <img
                                src={headline.image || noImage}
                                alt={headline.title}
                            />
                            <h2 className="headline-title">
                                {headline.title}
                                <i
                                    className={`${
                                        bookmarks.some(
                                            (bookmark) =>
                                                bookmark.title ===
                                                headline.title,
                                        )
                                            ? "fa-solid"
                                            : "fa-regular"
                                    } fa-bookmark bookmark`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleBookmarkClick(headline);
                                    }}
                                ></i>
                            </h2>
                        </div>
                    )}

                    <div className="news-grid">
                        {news &&
                            news.map((article, index) => (
                                <div
                                    key={index}
                                    className="news-item"
                                    onClick={() => handleArticleClick(article)}
                                >
                                    <img
                                        src={article.image || noImage}
                                        alt={article.title}
                                    />
                                    <h3>
                                        {article.title}
                                        <i
                                            className={`${
                                                bookmarks.some(
                                                    (bookmark) =>
                                                        bookmark.title ===
                                                        article.title,
                                                )
                                                    ? "fa-solid"
                                                    : "fa-regular"
                                            } fa-bookmark bookmark`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleBookmarkClick(article);
                                            }}
                                        ></i>
                                    </h3>
                                </div>
                            ))}
                    </div>
                </div>

                {/* News Modal */}
                <NewsModal
                    show={showModal}
                    article={selectedArticle}
                    onClose={() => setShowModal(false)}
                />
                {/* End of News Section */}

                <Bookmarks
                    show={showBookmarks}
                    bookmarks={bookmarks}
                    onClose={() => setShowBookmarks(false)}
                    onSelectArticle={handleArticleClick}
                    onDeletedBookmark={handleBookmarkClick}
                />

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
