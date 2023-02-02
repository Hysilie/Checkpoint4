import { Routes, Route, useLocation } from "react-router-dom";

/* Styles and images */
import "./index.css";
import flowersForHome from "@assets/others/flowersForhome.svg";

/* For All pages */
import Home from "@pages/users/Home";
import Login from "@components/Login";
import NavigationBar from "@components/NavigationBar";
import Register from "@components/Register";
import AboutUs from "@pages/users/AboutUs";
import Error from "@pages/users/Error";

/* Users pages */
import Article from "@pages/users/Article";
import ArticlesPages from "@pages/users/ArticlesPages";
import Plant from "@pages/users/Plant";
import PlantCreation from "@pages/users/PlantCreation";
import PlantsPages from "@pages/users/PlantsPages";
import Profile from "@pages/users/Profile";

/* Admin pages */
import ArticleCreation from "@pages/admin/ArticleCreation";
import ArticlesManagement from "@pages/admin/ArticlesManagement";
import UsersManagement from "@pages/admin/UsersManagement";

/* Context */
import { useCurrentUserContext } from "./contexts/userContext";

function App() {
  const location = useLocation();
  const { currentUser } = useCurrentUserContext();

  return (
    <div>
      {/*  ~~ Main Elements of the website ~~ */}
      {/* ~~ Home Page for register or login ~~ */}
      <div>
        {location.pathname === "/login" || location.pathname === "/register" ? (
          <main className="border bg-main-white h-screen flex ">
            <aside className="hidden h-full lg:flex items-center grow-0">
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

      {/* ~~ Routes  for all ~~ */}
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" />
        <Route path="/register" />

        <Route path="/articles" element={<ArticlesPages />} />
        <Route path="/plants" element={<PlantsPages />} />
        <Route path="/aboutus" element={<AboutUs />} />

        {/* ~~ Routes accessible for members and admins ~~ */}
        {currentUser?.username && (
          <>
            <Route path="/create-plant" element={<PlantCreation />} />
            <Route path="/articles/:id" element={<Article />} />
            <Route path="/plants/:id" element={<Plant />} />
            <Route path="/profile" />
          </>
        )}
        {/* ~~ Routes for admins ~~ */}
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
