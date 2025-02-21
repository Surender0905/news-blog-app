import "./Blogs.css";
import profileImg from "../assets/profile-pic.png";

const Blogs = () => {
    return (
        <div className="blogs">
            <div className="blogs-left">
                <img src={profileImg} alt="user's Image" />
            </div>
            <div className="blogs-right">
                {/* <button className="post-btn">Create New Post</button> */}
                <div className="blogs-right-form">
                    <h1>New Post</h1>

                    <form>
                        <div className="img-upload">
                            <label
                                htmlFor="file-upload"
                                className="file-upload"
                            >
                                <i className="bx bx-upload"></i>
                                Upload Image
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Add Title (Max 60 characters)"
                            className="title-input"
                        />

                        <textarea
                            placeholder="Write your blog here..."
                            className="text-input"
                        ></textarea>

                        <button type="submit" className="submit-btn">
                            Submit Post
                        </button>
                    </form>
                </div>

                <button className="blogs-close-btn">
                    Back <i className="bx bx-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Blogs;
