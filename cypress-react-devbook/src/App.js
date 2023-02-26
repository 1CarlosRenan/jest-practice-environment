import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import { api } from "./services/api";

function App() {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await api.get('books')
      setBooks(response.data)
    }
    fetchBooks()
    setIsLoading(false)
  }, [])


  return (
    <>
      {isLoading && <Typography variant="h3" component="h3">Carregando...</Typography>}
      <Typography variant="h2" component="h2" data-test="heading">Olá dev!</Typography>
      <BookList books = { books} />
    </>
  );
}

export default App;
