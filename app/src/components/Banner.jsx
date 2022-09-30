import style from "./Banner.module.css";

function Banner({ bannerUrl, name }) {
  return (
    <a className={style.Banner}>
      <img src={bannerUrl} />
      <div>
        <h3>{name}</h3>
      </div>
    </a>
  );
}

export default Banner;
