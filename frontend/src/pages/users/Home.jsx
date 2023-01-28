import flowersForHome from "../../assets/others/flowersForhome.svg";
import Login from "../../components/Login";

export default function Home() {
  return (
    <main className="border bg-main-white h-full ">
      <aside className="h-full flex items-center">
        <img
          src={flowersForHome}
          alt="Flowers to introduce Plants"
          className="h-full w-7/12"
        />
        <div className="border-r-2  border-main-dark opacity-60 h-4/5" />
        <Login />
      </aside>
    </main>
  );
}
