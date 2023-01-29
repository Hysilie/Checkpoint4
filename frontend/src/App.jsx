import { Routes, Route, useLocation } from "react-router-dom";

import "./index.css";
import ArticleCreation from "@pages/admin/ArticleCreation";
import NavigationBar from "@components/NavigationBar";
import Login from "@components/Login";
import Register from "@components/Register";
import flowersForHome from "@assets/others/flowersForhome.svg";
import ArticlesPages from "@pages/users/ArticlesPages";
import Article from "@pages/users/Article";
import PlantCreation from "@pages/users/PlantCreation";
import Plant from "@pages/users/Plant";
import PlantsPages from "@pages/users/PlantsPages";
import ArticlesManagement from "@pages/admin/ArticlesManagement";
import UsersManagement from "@pages/admin/UsersManagement";
import Error from "@pages/users/Error";
import Profile from "@pages/admin/Profile";
import Home from "./pages/users/Home";
import { useCurrentUserContext } from "./contexts/userContext";

function App() {
  const location = useLocation();
  const { currentUser } = useCurrentUserContext();

  return (
    <div>
      {/*  ~~ Main Elements of the website ~~ */}
      <div>
        {location.pathname === "/login" || location.pathname === "/register" ? (
          <main className="border bg-main-white h-screen flex ">
            <aside className="hidden h-full lg:flex items-center grow-0">
              {/* ~~ Home Page for register or login ~~ */}
              <img
                src={flowersForHome}
                alt="Flowers to introduce Plants"
                className="h-full"
              />
              <div className="border-r-2  border-main-dark opacity-60 h-4/5" />
            </aside>
            {location.pathname === "/login" && <Login />}
            {location.pathname === "/register" && <Register />}
          </main>
        ) : location.pathname === "/profile" && currentUser?.username ? (
          <Profile />
        ) : (
          <main className="border bg-main-white h-full  ">
            {/* ~~ Home Page for everyone ~~ */}
            <NavigationBar />
          </main>
        )}
      </div>

      {/* ~~ Routes ~~ */}
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" />
        <Route path="/register" />

        <Route path="/articles" element={<ArticlesPages />} />
        <Route path="/plants" element={<PlantsPages />} />

        {/* ~~ Registers routes ~~ */}
        {currentUser?.username && (
          <>
            <Route path="/create-plant" element={<PlantCreation />} />
            <Route path="/articles/:id" element={<Article />} />
            <Route path="/plants/:id" element={<Plant />} />
            <Route path="/profile" />
          </>
        )}
        {/* ~~ Admin routes ~~ */}
        {currentUser?.admin === 1 && (
          <>
            <Route path="/create-article" element={<ArticleCreation />} />
            <Route
              path="/articles-management"
              element={<ArticlesManagement />}
            />
            <Route path="/users-management" element={<UsersManagement />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
