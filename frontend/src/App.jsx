import Home from "./pages/users/Home";
import "./index.css";
import { CurrentUserProvider } from "./contexts/userContext";

function App() {
  return (
    <CurrentUserProvider>
      <div className="h-screen text-main-dark">
        <Home />
      </div>{" "}
    </CurrentUserProvider>
  );
}

export default App;
