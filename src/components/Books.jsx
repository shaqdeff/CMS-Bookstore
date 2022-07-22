import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/Books/Books';

/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
function Book(props) {
  const dispatch = useDispatch();

  return (
    <div className="books-container">
      <h2 className="heading-text">{props.title}</h2>
      <p className="book-author">{props.author}</p>
      <button
        type="button"
        className="remove-btn"
        onClick={() => dispatch(removeBook(props.id))}
      >
        Remove
      </button>
    </div>
  );
}

export default Book;
