import style from "./App.module.css";
import { useState, useEffect } from "react";

import Logo from "./assets/img/Logo.svg";
import Banner from "./assets/components/Banner.jsx";
import CreateAd from "./assets/components/CreateAd";

function App() {
  const url = "http://localhost:3000/";
  const [games, setGames] = useState();

  useEffect(() => {
    fetch(`${url}games`)
      .then((res) => res.json())
      .then((res) => {
        setGames(res);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={style.App}>
      <img id={style.logo} src={Logo} alt="Logo" />
      <h1>
        Seu <span>duo</span> está aqui!
      </h1>
      <div className={style.gameBanners}>
        <Banner
          key="0"
          bannerImg="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"
          name=""
          adsCount="2 anúncios"
        />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
      </div>
      <CreateAd />
    </div>
  );
}

export default App;
