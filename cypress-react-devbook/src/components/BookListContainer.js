import { useEffect, useState } from "react";
import BookList from "./BookList";
import { api } from "../services/api";

export const BookListContainer = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const response = await api.get("books");
        setBooks(response.data);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <BookList books={books} />
    </>
  );
};
