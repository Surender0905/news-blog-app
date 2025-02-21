import { useState } from "react";
import Blogs from "./components/Blogs";
import News from "./components/News";

function App() {
    const [showNews, setShowNews] = useState(true);
    const [showBlogs, setShowBlogs] = useState(false);

    const handleShowBlogs = () => {
        setShowBlogs(true);
        setShowNews(false);
    };

    const handleShowNews = () => {
        setShowBlogs(false);
        setShowNews(true);
    };
    return (
        <div className="container">
            <div className="app">
                {showNews && <News onShowBlogs={handleShowBlogs} />}
                {showBlogs && <Blogs onBack={handleShowNews} />}
            </div>
        </div>
    );
}

export default App;
