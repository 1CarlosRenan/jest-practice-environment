import { useEffect, useState } from "react";
import { api } from "../services/api";

export const useBookList = (initial) => {
  const [books, setBooks] = useState(initial);
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

  return { books, isLoading, error };
};
