import { useGetPostsQuery } from "./api/baseApi";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  const { data: posts = [], isLoading, isError } = useGetPostsQuery();

  return (
    <div>
      <Header title="Forum" />

      {isLoading && <h1>Завантаження постів...</h1>}
      {isError && <h1>Не вдалося завантажити пости</h1>}
      {!isLoading && !isError && posts.length === 0 && <h1>Постів поки немає</h1>}
    </div>
  );
}

export default App;