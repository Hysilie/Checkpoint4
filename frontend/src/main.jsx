import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CurrentArticleProvider } from "./contexts/articleContext";
import { CurrentUserProvider } from "./contexts/userContext";
import { CurrentPlantProvider } from "./contexts/plantContext";
import { CurrentFavoriteProvider } from "./contexts/favoriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <CurrentUserProvider>
      <CurrentFavoriteProvider>
        <CurrentArticleProvider>
          <CurrentPlantProvider>
            <App />
          </CurrentPlantProvider>
        </CurrentArticleProvider>
      </CurrentFavoriteProvider>
    </CurrentUserProvider>
  </Router>
);
