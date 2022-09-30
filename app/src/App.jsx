import style from "./App.module.css";
import { useState, useEffect } from "react";

import Logo from "./assets/img/Logo.svg";
import Banner from "./components/Banner.jsx";
import CreateAd from "./components/CreateAd";

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

  return (
    <div className={style.App}>
      <img id={style.logo} src={Logo} alt="Logo" />
      <h1>
        Seu <span>duo</span> está aqui!
      </h1>
      <div className={style.gameBanners}>
        {games?.map(g => (<Banner key={g.id} name={g.name} bannerUrl={g.bannerUrl} />))}
      </div>
      <CreateAd />
    </div>
  );
}

export default App;
