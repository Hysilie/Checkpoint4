import NavigationBar from "@components/NavigationBar";
import Register from "@components/Register";
import flowersForHome from "../../assets/others/flowersForhome.svg";
import Login from "../../components/Login";

export default function Home() {
  return (
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
      ) : (
        <main className="border bg-main-white h-screen  ">
          {/* ~~ Home Page for everyone ~~ */}
          <NavigationBar />
        </main>
      )}
    </div>
  );
}
