import { RegisterForm } from "./components/RegisterForm";
import { LoginForm } from "./components/LoginForm";
import { Header } from "./components/Header";
import { useGetProductsQuery } from "./api/baseApi";
import "./App.css";

function App() {
  const { data: posts = [], isLoading, isError } = useGetProductsQuery();

  return (
    <div>
      <Header title="Forum" />
      <RegisterForm />
      <LoginForm />
      {isLoading && <h1>Завантаження постів...</h1>}
      {isError && <h1>Не вдалося завантажити пости</h1>}
      {!isLoading && !isError && posts.length === 0 && <h1>Постів поки немає</h1>}
    </div>
  );
}

export default App;