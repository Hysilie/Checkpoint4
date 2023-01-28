import flowersForHome from "../../assets/others/flowersForhome.svg";
import Login from "../../components/Login";

export default function Home() {
  return (
    <main className="border bg-main-white h-full flex ">
      <aside className="hidden h-full lg:flex items-center grow-0">
        <img
          src={flowersForHome}
          alt="Flowers to introduce Plants"
          className="h-full"
        />
        <div className="border-r-2  border-main-dark opacity-60 h-4/5" />
      </aside>
      <Login />
    </main>
  );
}
