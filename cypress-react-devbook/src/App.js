import { Typography } from "@material-ui/core";

function App() {
  const books = [
    { name: "Refactoring" },
    { name: "Domain-driven design" },
  ]

  const renderBooks = (books) => {
    return (
      <div data-test="book-list">
        {

          books.map(book => (
            <div className="book-item">
              <Typography variant="h5" component="h5" data-test="heading">{book.name}</Typography>
            </div>
          ))
        }
      </div>
    )
  }

  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">Olá dev!</Typography>
      {renderBooks(books)}
    </>
  );
}

export default App;
