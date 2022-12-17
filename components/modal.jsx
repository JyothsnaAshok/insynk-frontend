import React from "react";
import styles from "../styles/modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen, movie }) => {
  console.log(movie);
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{movie?.title}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine />
          </button>
          <div className={styles.modalBody}>
            <img
              src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie?.poster_path}`}
              alt="modal"
              className={styles.modalImg}
            />
            <div className={styles.modalText}>
              <b>Release Date: </b>
              {movie.release_date}
              <div className={styles.modalDesc}>{movie?.overview}</div>
              <b>{movie?.vote_average}</b>/10 ({movie.vote_count} votes Total)
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
