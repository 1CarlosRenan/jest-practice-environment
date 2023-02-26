import { Typography } from "@material-ui/core";

function App() {
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">Olá dev!</Typography>
      <div data-test="book-list">
        <div className="book-item">
          <Typography variant="h2" component="h2" data-test="heading">Refactoring</Typography>
        </div>
        <div className="book-item">
          <Typography variant="h2" component="h2" data-test="heading">Domain-driven design</Typography>
        </div>
      </div>
    </>
  );
}

export default App;
