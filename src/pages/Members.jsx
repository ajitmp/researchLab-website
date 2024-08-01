import React from "react";
import styles from "./Members.module.css";

import professorImage from "../assets/images/members/professor.jpeg";

//current member images
import PM_Saqib from "../assets/images/members/current/PM_Saqib.png";
import PM_Mazhar from "../assets/images/members/current/PM_Mazhar.jpg";
import PM_Ankit from "../assets/images/members/current/PM_Ankit-kumar-sing.png";
import PM_Yoon from "../assets/images/members/current/PM_Yoon.jpg";
import PM_suchismita from "../assets/images/members/current/PM_suchismita.jpg";
import PM_KIMJaeHeon from "../assets/images/members/current/PM_KIMJaeHeon.jpg";
import PM_SubeenChoi from "../assets/images/members/current/PM_SubeenChoi.jpeg";
import PM_tyoon1 from "../assets/images/members/current/PM_tyoon1.jpeg";
import PM_DaehoKwon from "../assets/images/members/current/PM_DaehoKwon.jpg";

//alumni images
import ajit from "../assets/images/members/alumuni/ajit.jpg";
import saqibbhatti from "../assets/images/members/alumuni/PM_saqibbhatti.jpeg";
import ALU_abrar from "../assets/images/members/alumuni/ALU_abrar.jpeg";
import ALU_BAEKDuin from "../assets/images/members/alumuni/ALU_BAEKDuin.png";
import ALU_CHOShinyoungg from "../assets/images/members/alumuni/ALU_CHOShinyoung.jpg";
import ALU_JUNGKyeongJoo from "../assets/images/members/alumuni/ALU_JUNGKyeongJoo.png";
import ALU_NeeteshSaxena from "../assets/images/members/alumuni/ALU_NeeteshSaxena.jpg";
import ALU_PoriaHasanpor from "../assets/images/members/alumuni/ALU_PoriaHasanpor.jpg";
import ALU_PratikMusale from "../assets/images/members/alumuni/ALU_PratikMusale.png";
import ALU_SabaAlRubaye from "../assets/images/members/alumuni/ALU_SabaAlRubaye.jpg";
import ALU_sneha from "../assets/images/members/alumuni/ALU_sneha.jpg";

import ALU_ThejaswiniM from "../assets/images/members/alumuni/ALU_ThejaswiniM.jpg";
import Aumuni_SongJungho from "../assets/images/members/alumuni/Aumuni_Song-Jungho.jpg";
import ParkJun2 from "../assets/images/members/alumuni/ParkJun2.jpg";
import PM_Jwon from "../assets/images/members/alumuni/PM_Jwon.jpg";

const Members = () => {
  return (
    <div className={styles.members}>
      {/* Professor Section */}
      <section className={styles.professor}>
        <div className={styles.professorLeft}>
          <img
            src={professorImage}
            alt="Professor"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.professorRight}>
          <h2>Dr. David (Bong Jun) Choi, Ph.D., SMIEEE</h2> <br />
          <p>
            Dr Bong Jun Choi is an associate professor at the School of Computer
            Science & Engineering and jointly at the School of Electronic
            Engineering, Soongsil University, Seoul, Korea. Previously, he was
            an assistant professor at the Department of Computer Science, State
            University of New York Korea, Korea, and concurrently a research
            assistant professor at the Department of Computer Science, Stony
            Brook University, USA.
          </p>
          <br />
          <br />
          <p>
            He received his B.Sc. and M.Sc. degrees from Yonsei University,
            Korea, both in Electrical and Electronics Engineering, and the Ph.D.
            degree from the University of Waterloo, Canada, in Electrical and
            Computer Engineering. His current research focuses on distributed
            artificial intelligence, distributed intelligent energy networks,
            and security. He is a senior member of the IEEE and a member of the
            ACM
          </p>
        </div>
      </section>

      {/* Current Members Section */}
      <section className={styles.currentMembers}>
        <h2>Current Members</h2>
        <div className={styles.membersGrid}>
          {/* Repeat this block for each member START*/}
          <div className={styles.memberCard}>
            <img src={PM_Saqib} alt="Member 1" className={styles.memberImage} />
            <div className={styles.memberInfo}>
              <p>Name: Member 1</p>
              <p>Course: PhD</p>
              <p>Research Area: AI and Security</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>
          {/* this block  END*/}
          <div className={styles.memberCard}>
            <img src={PM_Ankit} alt="Member 1" className={styles.memberImage} />
            <div className={styles.memberInfo}>
              <p>Name: Member 1</p>
              <p>Course: PhD</p>
              <p>Research Area: AI and Security</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.memberCard}>
            <img
              src={PM_Mazhar}
              alt="Member 1"
              className={styles.memberImage}
            />
            <div className={styles.memberInfo}>
              <p>Name: Member 1</p>
              <p>Course: PhD</p>
              <p>Research Area: AI and Security</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.memberCard}>
            <img src={PM_Yoon} alt="Member 1" className={styles.memberImage} />
            <div className={styles.memberInfo}>
              <p>Name: Member 1</p>
              <p>Course: PhD</p>
              <p>Research Area: AI and Security</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.memberCard}>
            <img
              src={PM_suchismita}
              alt="Member 1"
              className={styles.memberImage}
            />
            <div className={styles.memberInfo}>
              <p>Name: Member 1</p>
              <p>Course: PhD</p>
              <p>Research Area: AI and Security</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.memberCard}>
            <img
              src={PM_KIMJaeHeon}
              alt="Member 1"
              className={styles.memberImage}
            />
            <div className={styles.memberInfo}>
              <p>Name: Member 1</p>
              <p>Course: PhD</p>
              <p>Research Area: AI and Security</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.memberCard}>
            <img
              src={PM_tyoon1}
              alt="Member 1"
              className={styles.memberImage}
            />
            <div className={styles.memberInfo}>
              <p>Name: Member 1</p>
              <p>Course: PhD</p>
              <p>Research Area: AI and Security</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.memberCard}>
            <img
              src={PM_SubeenChoi}
              alt="Member 1"
              className={styles.memberImage}
            />
            <div className={styles.memberInfo}>
              <p>Name: Member 1</p>
              <p>Course: PhD</p>
              <p>Research Area: AI and Security</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.memberCard}>
            <img
              src={PM_DaehoKwon}
              alt="Member 1"
              className={styles.memberImage}
            />
            <div className={styles.memberInfo}>
              <p>Name: Member 1</p>
              <p>Course: PhD</p>
              <p>Research Area: AI and Security</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          {/* Add more member cards here */}
        </div>
      </section>

      {/* Alumni Section */}
      <section className={styles.alumni}>
        <h2>Meet our Alumni</h2>
        <div className={styles.alumnisGrid}>
          {/* Repeat this block for each alumni */}
          <div className={styles.alumniCard}>
            <img
              src={saqibbhatti}
              alt="Alumni 1"
              className={styles.alumniImage}
            />
            <div className={styles.alumniInfo}>
              <p>Name: Alumni 1</p>
              <p>Course: MSc</p>
              <p>Research Area: Privacy</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.alumniCard}>
            <img src={ajit} alt="Alumni 1" className={styles.alumniImage} />
            <div className={styles.alumniInfo}>
              <p>Name: Alumni 1</p>
              <p>Course: MSc</p>
              <p>Research Area: Privacy</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.alumniCard}>
            <img
              src={ALU_sneha}
              alt="Alumni 1"
              className={styles.alumniImage}
            />
            <div className={styles.alumniInfo}>
              <p>Name: Alumni 1</p>
              <p>Course: MSc</p>
              <p>Research Area: Privacy</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.alumniCard}>
            <img
              src={ALU_NeeteshSaxena}
              alt="Alumni 1"
              className={styles.alumniImage}
            />
            <div className={styles.alumniInfo}>
              <p>Name: Alumni 1</p>
              <p>Course: MSc</p>
              <p>Research Area: Privacy</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.alumniCard}>
            <img
              src={ALU_ThejaswiniM}
              alt="Alumni 1"
              className={styles.alumniImage}
            />
            <div className={styles.alumniInfo}>
              <p>Name: Alumni 1</p>
              <p>Course: MSc</p>
              <p>Research Area: Privacy</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.alumniCard}>
            <img
              src={ALU_PoriaHasanpor}
              alt="Alumni 1"
              className={styles.alumniImage}
            />
            <div className={styles.alumniInfo}>
              <p>Name: Alumni 1</p>
              <p>Course: MSc</p>
              <p>Research Area: Privacy</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.alumniCard}>
            <img
              src={ALU_SabaAlRubaye}
              alt="Alumni 1"
              className={styles.alumniImage}
            />
            <div className={styles.alumniInfo}>
              <p>Name: Alumni 1</p>
              <p>Course: MSc</p>
              <p>Research Area: Privacy</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.alumniCard}>
            <img
              src={ALU_BAEKDuin}
              alt="Alumni 1"
              className={styles.alumniImage}
            />
            <div className={styles.alumniInfo}>
              <p>Name: Alumni 1</p>
              <p>Course: MSc</p>
              <p>Research Area: Privacy</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.alumniCard}>
            <img
              src={ALU_CHOShinyoungg}
              alt="Alumni 1"
              className={styles.alumniImage}
            />
            <div className={styles.alumniInfo}>
              <p>Name: Alumni 1</p>
              <p>Course: MSc</p>
              <p>Research Area: Privacy</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.alumniCard}>
            <img
              src={ALU_JUNGKyeongJoo}
              alt="Alumni 1"
              className={styles.alumniImage}
            />
            <div className={styles.alumniInfo}>
              <p>Name: Alumni 1</p>
              <p>Course: MSc</p>
              <p>Research Area: Privacy</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.alumniCard}>
            <img
              src={ALU_PratikMusale}
              alt="Alumni 1"
              className={styles.alumniImage}
            />
            <div className={styles.alumniInfo}>
              <p>Name: Alumni 1</p>
              <p>Course: MSc</p>
              <p>Research Area: Privacy</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.alumniCard}>
            <img
              src={ALU_abrar}
              alt="Alumni 1"
              className={styles.alumniImage}
            />
            <div className={styles.alumniInfo}>
              <p>Name: Alumni 1</p>
              <p>Course: MSc</p>
              <p>Research Area: Privacy</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.alumniCard}>
            <img src={PM_Jwon} alt="Alumni 1" className={styles.alumniImage} />
            <div className={styles.alumniInfo}>
              <p>Name: Alumni 1</p>
              <p>Course: MSc</p>
              <p>Research Area: Privacy</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.alumniCard}>
            <img src={ParkJun2} alt="Alumni 1" className={styles.alumniImage} />
            <div className={styles.alumniInfo}>
              <p>Name: Alumni 1</p>
              <p>Course: MSc</p>
              <p>Research Area: Privacy</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          <div className={styles.alumniCard}>
            <img
              src={Aumuni_SongJungho}
              alt="Alumni 1"
              className={styles.alumniImage}
            />
            <div className={styles.alumniInfo}>
              <p>Name: Alumni 1</p>
              <p>Course: MSc</p>
              <p>Research Area: Privacy</p>
              <p>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </p>
            </div>
          </div>

          {/* Add more alumni cards here */}
        </div>
      </section>
    </div>
  );
};

export default Members;
