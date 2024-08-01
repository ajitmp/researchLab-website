import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./Activities.module.css";

import jwon_g1 from "../assets/images/albums/graduation/Jwon/g1.jpg";

Modal.setAppElement("#root"); // Set the root element for accessibility

const Activities = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalIsOpen(false);
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
        images: ["/path/to/outing1.jpg", "/path/to/outing2.jpg"],
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
        images: [jwon_g1],
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
                      onClick={() => openModal(image)}
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
        <img src={selectedImage} alt="Selected" className={styles.modalImage} />
        <button onClick={closeModal} className={styles.closeButton}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Activities;
