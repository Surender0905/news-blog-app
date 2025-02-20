import Weather from "./Weather";
import Calender from "./Calender";
import userImg from "../assets/profile-pic.png";
import techImg from "../assets/tech.jpg";
import sportsImg from "../assets/sports.jpg";
import healthImg from "../assets/health.jpg";

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
                    <div className="user">
                        <img src={userImg} alt="profile pic" />
                        <p>Surender&#39;s Blog</p>
                    </div>
                    <div className="categories">
                        <h1 className="nav-heading">Categories</h1>
                        <div className="nav-links">
                            <a href="#" className="nav-link">
                                General
                            </a>
                            <a href="#" className="nav-link">
                                World
                            </a>
                            <a href="#" className="nav-link">
                                Business
                            </a>
                            <a href="#" className="nav-link">
                                Sports
                            </a>
                            <a href="#" className="nav-link">
                                Health
                            </a>
                            <a href="#" className="nav-link">
                                Science
                            </a>
                            <a href="#" className="nav-link">
                                Technology
                            </a>
                            <a href="#" className="nav-link">
                                Entertainment
                            </a>

                            <a href="#" className="nav-link">
                                Nation
                            </a>
                            <a href="#" className="nav-link">
                                Bookmarks{" "}
                                <i className="fa-regular fa-bookmark"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* News Section */}
                <div className="news-section">
                    <div className="headline">
                        <img src={techImg} alt="tech news" />
                        <h2 className="headline-title">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eligendi nemo exercitationem quos.
                            <i className="fa-regular fa-bookmark bookmark"></i>
                        </h2>
                    </div>
                    <div className="news-grid">
                        <div className="news-item">
                            <img src={techImg} alt="tech news" />
                            <h3>
                                Lorem ipsum dolor sit
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </h3>
                        </div>
                        <div className="news-item">
                            <img src={sportsImg} alt="sports news" />
                            <h3>
                                Lorem ipsum dolor sit
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </h3>
                        </div>

                        <div className="news-item">
                            <img src={healthImg} alt="health news" />
                            <h3>
                                Lorem ipsum dolor sit
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </h3>
                        </div>

                        <div className="news-item">
                            <img src={techImg} alt="tech news" />
                            <h3>
                                Lorem ipsum dolor sit
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </h3>
                        </div>
                        <div className="news-item">
                            <img src={sportsImg} alt="sports news" />
                            <h3>
                                Lorem ipsum dolor sit
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </h3>
                        </div>

                        <div className="news-item">
                            <img src={healthImg} alt="health news" />
                            <h3>
                                Lorem ipsum dolor sit
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </h3>
                        </div>
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
