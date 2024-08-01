import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import styles from "./Activities.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import outing1_1 from "../assets/images/albums/outing/1/O1_1.jpeg";

import outing2_1 from "../assets/images/albums/outing/2/O2_1.jpeg";
import outing2_2 from "../assets/images/albums/outing/2/O2_2.jpeg";

import jwon_g1 from "../assets/images/albums/graduation/Jwon/g1.jpg";
import jwon_g2 from "../assets/images/albums/graduation/Jwon/g2.jpg";

Modal.setAppElement("#root");

const Activities = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (images, index) => {
    setSelectedImages(images);
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImages([]);
    setModalIsOpen(false);
  };

  const settings = {
    initialSlide: currentIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div className={styles.arrowNext}>Next</div>,
    prevArrow: <div className={styles.arrowPrev}>Previous</div>,
  };

  const albums = {
    "Conference and Events": [
      {
        name: "Event 1",
        images: ["/path/to/conference1.jpg", "/path/to/conference2.jpg"],
      },
      // Add more events
    ],
    "Talk & Lecture": [
      {
        name: "Lecture 1",
        images: ["/path/to/lecture1.jpg", "/path/to/lecture2.jpg"],
      },
      // Add more lectures
    ],
    // Define other albums similarly
    Outing: [
      {
        name: "Outing 1",
        images: [outing1_1],
      },
      {
        name: "Outing 2",
        images: [outing2_1, outing2_2],
      },
      // Add more outings
    ],
    "Team Lunch": [
      {
        name: "Lunch 1",
        images: ["/path/to/lunch1.jpg", "/path/to/lunch2.jpg"],
      },
      // Add more team lunches
    ],
    Awards: [
      {
        name: "Award 1",
        images: ["/path/to/award1.jpg", "/path/to/award2.jpg"],
      },
      // Add more awards
    ],
    Graduation: [
      {
        name: "Graduation 1",
        images: [jwon_g1, jwon_g2],
      },
      // Add more graduations
    ],
  };

  return (
    <div className={styles.activities}>
      <h1>Research Lab Activities</h1>
      {Object.keys(albums).map((albumName) => (
        <div key={albumName} className={styles.album}>
          <h2>{albumName}</h2>
          <div className={styles.subAlbums}>
            {albums[albumName].map((event, index) => (
              <div key={index} className={styles.subAlbum}>
                <h3>{event.name}</h3>
                <div className={styles.images}>
                  {event.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={event.name}
                      onClick={() => openModal(event.images, idx)}
                      className={styles.thumbnail}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div onClick={closeModal} className={styles.modalContent}>
          <Slider {...settings}>
            {selectedImages.map((image, index) => (
              <div key={index} className={styles.sliderImage}>
                <img src={image} alt="Selected" className={styles.modalImage} />
              </div>
            ))}
          </Slider>
        </div>
      </Modal>
    </div>
  );
};

export default Activities;
