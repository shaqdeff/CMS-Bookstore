import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/Books/Books';
import './Books.css';

/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
function Book(props) {
  const dispatch = useDispatch();
  const deleteBook = () => dispatch(removeBook(props.id));
  return (
    <div className="books-div">
      <div className="books-container">
        <h3 className="book-type">{props.category}</h3>
        <h2 className="heading-text">{props.title}</h2>
        <p className="book-author">{props.author}</p>
        <button type="button" className="btn">
          Comments
          <span>|</span>
        </button>
        <button type="button" className="btn edit-btn">
          Edit
          <span>|</span>
        </button>
        <button type="button" className="btn remove-btn" onClick={deleteBook}>
          Remove
        </button>
      </div>
      <div className="book-progress">
        <div className="Oval-2" />
        <div>
          <p className="Percent-Complete">64%</p>
          <p className="Completed">Completed</p>
        </div>
      </div>
      <div className="book-chapter">
        <div className="Line-2" />
        <div className="chap-container">
          <p className="Current-Chapter">CURRENT CHAPTER</p>
          <p className="Current-Lesson">Chapter 17</p>
          <button type="button" className="Update-progress">
            Update progress
          </button>
        </div>
      </div>
    </div>
  );
}

export default Book;
