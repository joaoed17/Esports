import style from "./Banner.module.css";
import { useRef } from "react";

function Banner({ bannerUrl, name }) {
  return (
    <a className={style.banner}>
      <img src={bannerUrl} />
      <div>
        <h3>{name}</h3>
        <span>3 anúncios</span>
      </div>
    </a>
  );
}

export default Banner;
