import style from "./App.module.css";

import { MagnifyingGlassPlus } from "phosphor-react";
import Logo from "./assets/img/Logo.svg";
import Banner from "./assets/components/Banner.jsx";

function App() {
  return (
    <div className={style.App}>
      <img src={Logo} alt="Logo" />
      <h1>
        Seu <span>duo</span> está aqui!
      </h1>
      <div className={style.gameBanners}>
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
      </div>
      <div className={style.createAdBackground}>
        <div className={style.createAd}>
          <div className={style.createAdText}>
            <h2>Não encontrou seu duo?</h2>
            <h3>Publique seu anúncio para encontrar novos players!</h3>
          </div>
          <div className={style.createAdButton}>
            <MagnifyingGlassPlus size="1.5em" />
            <span>Publicar anúncio</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
