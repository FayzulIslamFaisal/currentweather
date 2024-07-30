import Logo from "./components/header/Logo";
import SearchLocation from "./components/header/SearchLocation";
import FavouriteLocations from "./components/header/FavouriteLocations";
import FavouriteListModal from "./components/header/FavouriteListModal";
import WeatherBoard from "./components/weather/WeatherBoard";

export default function Home() {
  return (
    <div className=" mx-auto container px-8 grid place-items-center h-screen ">
      <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10 mb-8">
        <nav className=" flex items-center justify-between py-6">
          <Logo />
          <div className="flex items-center gap-4 relative">
            <SearchLocation />
            <FavouriteLocations />
            {/* <!-- Modal --> */}
            <FavouriteListModal />
          </div>
        </nav>
      </header>
      <main className=" mt-6">
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}
