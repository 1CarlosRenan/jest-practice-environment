import { Typography } from "@material-ui/core";
import BookList from "./components/BookList";

function App() {
  const books = [
    { name: "Refactoring" },
    { name: "Domain-driven design" },
  ]

  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">Olá dev!</Typography>
      <BookList books = { books} />
    </>
  );
}

export default App;
