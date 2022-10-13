import style from "./App.module.css";
import { useState, useEffect } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

import Logo from "./assets/img/Logo.svg";
import Banner from "./components/Banner.jsx";
import CreateAdBanner from "./components/CreateAdBanner";

function App() {
  const url = "http://localhost:3000/";

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`${url}games`)
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const scrollRight = () => {
    document.getElementById("gameBanners").scrollBy({
      left: 205,
      behavior: "smooth",
    });
  };
  const scrollLeft = () => {
    document.getElementById("gameBanners").scrollBy({
      left: -205,
      behavior: "smooth",
    });
  };

  return (
    <main className={style.App}>
      <img id={style.logo} src={Logo} alt="Logo" />

      <h1>
        Seu <span>duo</span> está aqui!
      </h1>

      <div className={style.scrollButtons}>
        <button onClick={scrollLeft} className={style.scrollButton}>
          <CaretLeft size="3em" weight="bold" />
        </button>
        <div id="gameBanners" className={style.gameBanners}>
          {games?.map((g) => (
            <Banner
              id={g.id}
              key={g.id}
              name={g.name}
              bannerUrl={g.bannerUrl}
              countAds={g._count.ads}
            />
          ))}
        </div>
        <button onClick={scrollRight} className={style.scrollButton}>
          <CaretRight size="3em" weight="bold" />
        </button>
      </div>

      <CreateAdBanner />
    </main>
  );
}

export default App;
