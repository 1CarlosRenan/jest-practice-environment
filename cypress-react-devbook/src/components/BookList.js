import { Typography } from "@material-ui/core";

const BookList = ({ books, error, loading }) => {
  return (
    <div data-test="book-list">
      {books.map((book) => (
        <div className="book-item">
          <Typography variant="h5" component="h5" data-test="heading">
            {book.name}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default BookList;
