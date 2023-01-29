import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CurrentArticleProvider } from "./contexts/articleContext";
import { CurrentUserProvider } from "./contexts/userContext";
import { CurrentPlantProvider } from "./contexts/plantContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <CurrentUserProvider>
      <CurrentArticleProvider>
        <CurrentPlantProvider>
          <App />
        </CurrentPlantProvider>
      </CurrentArticleProvider>
    </CurrentUserProvider>
  </Router>
);
