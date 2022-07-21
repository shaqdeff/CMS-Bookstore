/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
import AddBook from './AddBook';

export default function Books(props) {
  return (
    <div className="books-container">
      <span className="genre">{props.genre}</span>
      <h2 className="title">{props.title}</h2>
      <p className="author">{props.author}</p>
      <button type="button" className="remove-btn">
        Remove
      </button>
      <AddBook />
    </div>
  );
}
