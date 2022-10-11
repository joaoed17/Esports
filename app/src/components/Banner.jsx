import style from "./Banner.module.css";
import Modal from "react-modal";
import { useState } from "react";
import { GameController, ArrowLeft, ArrowRight } from "phosphor-react";

Modal.setAppElement("#root");

function Banner({ bannerUrl, name, id, countAds }) {
  const [modalAdsIsOpen, setModalAdsIsOpen] = useState(false);
  const [ads, setAds] = useState([]);

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

  const openModal = async () => {
    setModalAdsIsOpen(true);

    await fetch(`http://localhost:3000/games/${id}/ads`)
      .then((res) => res.json())
      .then((data) => {
        setAds(data);
      })
      .catch((error) => console.error(error));
  };

  const closeModal = () => {
    setModalAdsIsOpen(false);
  };

  const scrollRight = () => {
    document.getElementById("adsBanners").scrollBy({
      left: 220,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    document.getElementById("adsBanners").scrollBy({
      left: -220,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={openModal} id={id} className={style.banner}>
      <button className={style.bannerButton}>
        <img src={bannerUrl} />
        <div>
          <h3>{name}</h3>
          <span>{countAds} anúncio(s)</span>
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
              <ArrowLeft weight="bold" />
            </button>
            <div className={style.modalTitle}>
              <h2>{name}</h2>
              <h5>Conecte-se para começar a jogar!</h5>
            </div>
          </div>

          <div id="color" className={style.modalAds}>
            <img src={bannerUrl} alt="" />

            <div id="adsBanners" className={style.adsBanners}>
              {ads?.map((a) => (
                <div className={style.adBanner} key={a.id}>
                  <div className={style.informations}>
                    <div>
                      <h3>Nome</h3>
                      <h4>{a.name}</h4>
                    </div>
                    <div>
                      <h3>Tempo de jogo</h3>
                      <h4>{`${a.yearsPlaying} Ano(s)`}</h4>
                    </div>
                    <div>
                      <h3>Disponibilidade</h3>
                      <div className={style.days}>
                        <abbr className={style.daySelected} title="Domingo">
                          D
                        </abbr>
                        <abbr className={style.day} title="Segunda">
                          S
                        </abbr>
                        <abbr className={style.day} title="Terça">
                          T
                        </abbr>
                        <abbr className={style.day} title="Quarta">
                          Q
                        </abbr>
                        <abbr className={style.day} title="Quinta">
                          Q
                        </abbr>
                        <abbr className={style.daySelected} title="Sexta">
                          S
                        </abbr>
                        <abbr className={style.daySelected} title="Sábado">
                          S
                        </abbr>
                      </div>
                      <h4>{`${a.hourStart}-${a.hourEnd}`}</h4>
                    </div>
                    <div>
                      <h3>Chamada de áudio</h3>
                      {a.useVoiceChannel ? (
                        <span className={style.green}>Sim</span>
                      ) : (
                        <span className={style.red}>Não</span>
                      )}
                    </div>
                  </div>
                  <button>
                    <GameController size="1.4em" weight="bold" />
                    Conectar
                  </button>
                </div>
              ))}
            </div>
          </div>
          {countAds > 3 ? (
            <div className={style.buttons}>
              <button onClick={scrollRight}>
                <ArrowRight weight="bold" />
              </button>
              <button onClick={scrollLeft}>
                <ArrowLeft weight="bold" />
              </button>
            </div>
          ) : (
            <div className={style.buttonsHide}>
              <button>
                <ArrowRight />
              </button>
              <button>
                <ArrowLeft />
              </button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default Banner;
