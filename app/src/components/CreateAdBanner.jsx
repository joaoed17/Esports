import style from "./CreateAdBanner.module.css";

import { MagnifyingGlassPlus } from "phosphor-react";

function CreateAdBanner() {
  return (
    <div className={style.createAdBackground}>
      <div className={style.createAd}>
        <div className={style.createAdText}>
          <h2>Não encontrou seu duo?</h2>
          <h3>Publique seu anúncio para encontrar novos players!</h3>
        </div>
        <button className={style.createAdButton}>
          <MagnifyingGlassPlus size="1.5em" />
          <span>Publicar anúncio</span>
        </button>
      </div>
    </div>
  );
}

export default CreateAdBanner;
