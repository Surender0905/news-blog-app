/* eslint-disable react/prop-types */
import "./NewsModal.css";
import "./Bookmarks.css";
import noImage from "../assets/no-img.png";

const Bookmarks = ({
    show,
    bookmarks = [],
    onClose,
    onSelectArticle,
    onDeletedBookmark,
}) => {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </span>
                <h2 className="bookmarks-heading">Bookmarked News</h2>

                <div className="bookmarks-list">
                    {bookmarks.length === 0 && (
                        <p className="empty-bookmarks">
                            You have no bookmarks yet.
                        </p>
                    )}
                    {bookmarks?.map((bookmark, index) => (
                        <div
                            key={index}
                            className="bookmark-item"
                            onClick={() => onSelectArticle(bookmark)}
                        >
                            <img
                                src={bookmark.image || noImage}
                                alt={bookmark.title}
                                className="bookmark-img"
                            />
                            <h3 className="bookmark-title">{bookmark.title}</h3>
                            <span
                                className="delete-button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDeletedBookmark(bookmark);
                                }}
                            >
                                {" "}
                                <i className="fa-solid fa-trash-alt delete"></i>
                            </span>
                        </div>
                    ))}
                    {/* <div className="bookmark-item">
                        <img src="" alt="" />
                        <h3></h3>
                        <span
                            className="delete-button"
                            onClick={onDeleteBookmark}
                        >
                            <i className="fa-regular fa-circle-xmark"></i>
                        </span>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;
