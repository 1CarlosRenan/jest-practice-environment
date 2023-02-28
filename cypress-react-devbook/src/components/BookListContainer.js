import { useBookList } from "../hooks/UseBookList";
import BookList from "./BookList";

export const BookListContainer = () => {
  const { books, isLoading, error } = useBookList;

  return (
    <>
      <BookList books={books} isLoading={isLoading} error={error} />
    </>
  );
};
