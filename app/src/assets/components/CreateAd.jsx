import style from "./CreateAd.module.css";

import { MagnifyingGlassPlus } from "phosphor-react";

function CreateAd() {
  return (
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
  );
}

export default CreateAd;
