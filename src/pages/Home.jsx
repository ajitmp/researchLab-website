import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

// Import images
import coverImage1 from "../assets/images/cover/image1.jpg";
import coverImage2 from "../assets/images/cover/image2.jpg";
// import coverImage3 from "../assets/images/cover/image3.jpg";
// import coverImage4 from "../assets/images/cover/image4.jpg";

import peopleImage1 from "../assets/images/people/people1.jpg";
import peopleImage2 from "../assets/images/people/people2.jpg";
import peopleImage3 from "../assets/images/people/people3.jpg";
import peopleImage4 from "../assets/images/people/people4.jpg";

import newsImage1 from "../assets/images/news/news1.jpg";
import newsImage2 from "../assets/images/news/news2.jpg";
import newsImage3 from "../assets/images/news/news3.jpg";
import newsImage4 from "../assets/images/news/news4.jpg";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const coverImages = [coverImage1, coverImage2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % coverImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [coverImages.length]);

  return (
    <div className={styles.container}>
      {/* Cover Image Section */}
      <section className={styles.coverImageSection}>
        <div className={styles.coverImageWrapper}>
          <img
            src={coverImages[currentIndex]}
            alt="Cover"
            className={styles.coverImage}
          />
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section className={styles.whoWeAreSection}>
        <div className={styles.whoWeAreText}>
          <h2>Our People Are Our Greatest Strength</h2>
          <p>
            Welcome to the Distributed Intelligence Lab (DIL), where we focus on
            solving practical, high-impact problems related to distributed
            networked systems, such as the Internet of Things, distributed smart
            grids, and distributed artificial intelligence. We also focus on
            developing secure and privacy-preserving distributed systems. We are
            shaping tomorrow's digital landscape and invite you to join us on
            this exciting journey
          </p>
          <div className={styles.buttonContainer}>
            <Link to="/members" className={styles.button}>
              Members
            </Link>
            <Link to="/research" className={styles.button}>
              Research
            </Link>
            <Link to="/activities" className={styles.button}>
              Activities
            </Link>
          </div>
          <div className={styles.currentOpeningsSection}>
            <h2>Current Openings</h2>
            <p>
              Explore exciting career opportunities and join our innovative
              team.
              <br />{" "}
              <Link to="/recruitment" className={styles.link}>
                {"\n"}View Recruitment Page
              </Link>
            </p>
          </div>
        </div>

        <div className={styles.whoWeAreImages}>
          <img
            src={peopleImage1}
            alt="People 1"
            className={styles.whoWeAreImage}
          />
          <img
            src={peopleImage2}
            alt="People 2"
            className={styles.whoWeAreImage}
          />
          <img
            src={peopleImage3}
            alt="People 3"
            className={styles.whoWeAreImage}
          />
          <img
            src={peopleImage4}
            alt="People 4"
            className={styles.whoWeAreImage}
          />
        </div>
      </section>

      {/* Featured News Section */}
      <section className={styles.featuredNewsSection}>
        <h2>Featured News</h2>
        <div className={styles.newsCards}>
          <div className={styles.newsCard}>
            <img src={newsImage1} alt="News 1" className={styles.newsImage} />
            <div className={styles.newsText}>
              <span className={styles.newsDate}>2024-08-01</span>
              <span className={styles.newsEvent}>Event Name 1</span>
              <p className={styles.newsTitle}>Title of News 1</p>
              <p className={styles.newsDescription}>Description of News 1.</p>
            </div>
          </div>
          <div className={styles.newsCard}>
            <img src={newsImage2} alt="News 2" className={styles.newsImage} />
            <div className={styles.newsText}>
              <span className={styles.newsDate}>2024-08-02</span>
              <span className={styles.newsEvent}>Event Name 2</span>
              <p className={styles.newsTitle}>Title of News 2</p>
              <p className={styles.newsDescription}>Description of News 2.</p>
            </div>
          </div>
          <div className={styles.newsCard}>
            <img src={newsImage3} alt="News 3" className={styles.newsImage} />
            <div className={styles.newsText}>
              <span className={styles.newsDate}>2024-08-03</span>
              <span className={styles.newsEvent}>Event Name 3</span>
              <p className={styles.newsTitle}>Title of News 3</p>
              <p className={styles.newsDescription}>Description of News 3.</p>
            </div>
          </div>
          <div className={styles.newsCard}>
            <img src={newsImage4} alt="News 4" className={styles.newsImage} />
            <div className={styles.newsText}>
              <span className={styles.newsDate}>2024-08-04</span>
              <span className={styles.newsEvent}>Event Name 4</span>
              <p className={styles.newsTitle}>Title of News 4</p>
              <p className={styles.newsDescription}>Description of News 4.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
