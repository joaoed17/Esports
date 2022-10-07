import style from "./Banner.module.css";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { GameController, ArrowLeft } from "phosphor-react";

Modal.setAppElement("#root");

function Banner({
  bannerUrl,
  name,
  id,
  playerName,
  yearsPlaying,
  weekDays,
  hourStart,
  hourEnd,
  voiceChannel,
}) {
  const [modalAdsIsOpen, setModalAdsIsOpen] = useState(false);

  const customStyles = {
    content: {
      positon: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      background: "linear-gradient(to top, #121214, #150f24)",
      border: "none",
      width: "90%",
      maxWidth: "63em",
      height: " 75%",
      borderRadius: "1em",
    },
    overlay: {
      background: "#000000b0",
    },
  };

  const openModal = () => {
    setModalAdsIsOpen(true);
  };

  function closeModal() {
    setModalAdsIsOpen(false);
  }

  return (
    <div onClick={openModal} id={id} className={style.banner}>
      <button className={style.bannerButton}>
        <img src={bannerUrl} />
        <div>
          <h3>{name}</h3>
          <span>3 anúncios</span>
        </div>
      </button>

      <Modal
        onRequestClose={closeModal}
        style={customStyles}
        isOpen={modalAdsIsOpen}
      >
        <div className={style.modal}>
          <div className={style.modalTop}>
            <button onClickCapture={closeModal}>
              <ArrowLeft />
            </button>
            <div className={style.modalTitle}>
              <h2>{name}</h2>
              <h5>Conecte-se para começar a jogar!</h5>
            </div>
          </div>

          <div className={style.modalAds}>
            <img src={bannerUrl} alt="" />

            <div className={style.adsBanners}>
              <div className={style.adBanner}>
                <div className={style.informations}>
                  <h3>Nome</h3>
                  <h4>{playerName}</h4>
                  <h3>Tempo de jogo</h3>
                  <h4>{yearsPlaying}</h4>
                  <h3>Disponibilidade</h3>
                  <h4>{`${weekDays} | ${hourStart}-${hourEnd}`}</h4>
                  <h3>Chamada de áudio</h3>
                  <span className={style.green}>{voiceChannel}</span>
                </div>
                <button>
                  <GameController size="1.4em" weight="bold" />
                  Conectar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Banner;
