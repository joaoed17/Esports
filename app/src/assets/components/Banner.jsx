import style from "./Banner.module.css";

function Banner(props) {
  return (
    <a className={style.Banner}>
      <img src={props.bannerImg} />
      <div>
        <h3>{props.name}</h3>
        <span>{props.adsCount}</span>
      </div>
    </a>
  );
}

export default Banner;
