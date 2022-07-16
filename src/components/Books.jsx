/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
function Books(props) {
  return (
    <div className="books-container">
      <span className="book-type">{props.genre}</span>
      <h2 className="heading-text">{props.title}</h2>
      <p className="book-author">{props.author}</p>
      <button type="button" className="remove-btn">
        Remove
      </button>
    </div>
  );
}

export default Books;