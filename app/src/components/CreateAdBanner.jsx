import style from "./CreateAdBanner.module.css";
import { useState } from "react";
import Modal from "react-modal";

import { MagnifyingGlassPlus, GameController } from "phosphor-react";

function CreateAdBanner() {
  const [modalCreateAdsIsOpen, setModalCreateAdsIsOpen] = useState(false);

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
      width: "40% ",
      maxWidth: "31em",
      height: " 90%",
      borderRadius: "1em",
    },
    overlay: {
      overflow: "hidden",
      background: "#000000b0",
    },
  };

  const openModal = () => {
    setModalCreateAdsIsOpen(true);
  };

  const closeModal = () => {
    setModalCreateAdsIsOpen(false);
  };

  return (
    <div className={style.createAdBackground}>
      <div className={style.createAd}>
        <div className={style.createAdText}>
          <h2>Não encontrou seu duo?</h2>
          <h3>Publique seu anúncio para encontrar novos players!</h3>
        </div>
        <button onClick={openModal} className={style.createAdButton}>
          <MagnifyingGlassPlus size="1.5em" />
          <span>Publicar anúncio</span>
        </button>
      </div>

      <Modal
        onRequestClose={closeModal}
        style={customStyles}
        isOpen={modalCreateAdsIsOpen}
      >
        <form className={style.modalCreateAd}>
          <h1>Publique um anúncio</h1>

          <div className={style.inputs}>
            <div className={style.inputDivColum}>
              <label htmlFor="game">Qual o game?</label>
              <select name="game" id="game" defaultValue="">
                <option disabled selected>
                  Selecione o game que deseja jogar
                </option>
                {}
              </select>
            </div>
            <div className={style.inputDivColum}>
              <label htmlFor="name">Seu nome (ou nickname)</label>
              <input type="text" />
            </div>
            <div className={style.inputDivRow}>
              <div className={style.inputDivColum}>
                <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                <input type="number" />
              </div>
              <div className={style.inputDivColum}>
                <label htmlFor="discord">Qual seu Discord?</label>
                <input type="text" />
              </div>
            </div>
            <div className={style.inputDivRow}>
              <div className={style.inputDivColum}>
                <label htmlFor="weekDays">Quando costuma jogar?</label>
                <div>
                  <input type="checkbox" />
                  <input type="checkbox" />
                  <input type="checkbox" />
                  <input type="checkbox" />
                  <input type="checkbox" />
                  <input type="checkbox" />
                  <input type="checkbox" />
                </div>
              </div>
              <div className={style.inputDivColum}>
                <label htmlFor="hoursPlaying">Qual horário do dia?</label>

                <div className={style.inputDivRow}>
                  <input type="time" />

                  <input type="time" />
                </div>
              </div>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="useVoiceChannel">
                Costumo me conectar ao chat de voz
              </label>
            </div>
          </div>
          <div className={style.buttons}>
            <button onClick={closeModal} className={style.buttonClose}>
              Cancelar
            </button>
            <button className={style.buttonSend}>
              <GameController size="1.4em" weight="bold" />
              Encontrar duo
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default CreateAdBanner;
