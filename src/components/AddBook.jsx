function AddBook() {
  return (
    <div>
      <h1>Add New Book</h1>
      <form>
        <input type="text" id="title" placeholder="Book title" />
        <input type="text" id="author" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
