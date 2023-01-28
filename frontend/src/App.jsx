import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CurrentUserProvider } from "./contexts/userContext";
import Home from "./pages/users/Home";
import "./index.css";

function App() {
  return (
    <Router>
      <CurrentUserProvider>
        <Routes>
          <Route path="/login" element={<Home />} />
          <Route path="/register" element={<Home />} />
        </Routes>
      </CurrentUserProvider>
    </Router>
  );
}

export default App;
