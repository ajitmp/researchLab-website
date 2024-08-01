import React from "react";
import styles from "./Recruitment.module.css";

const Recruitment = () => {
  const researchAreas = [
    {
      title: "AI and Security in Intelligent Energy Systems",
      description: {
        kor: `탄소중립 시대의 에너지정책을 선도할 융복합 에너지정책 디자이너, 즉, 급변하는 에너지 수급 여건을 판단할 수 있으면서 기술적 대응 능력을 고려한 정책 설계가 가능한 인재양성을 목표로 합니다. 제 지도를 받는 학생들은 스마트 그리드의 AI와 보안 문제를 해결하는 연구를 수행하게 됩니다. 학생들은 전기공학, 화학공학, 기계공학, 컴퓨터공학, 재료공학, 경제학 등 다양한 분야의 강의를 수강하고 다양한 분야의 교수진과 공동으로 작업할 수 있는 기회를 갖게 됩니다. 학생들은 또한 산업계와 공동 프로젝트를 진행하게 됩니다.`,
        eng: `The graduate program aims to cultivate convergent energy policy designers who can lead energy policy in the zero-carbon era, i.e., people who can judge rapidly changing energy supply and demand conditions and design policies considering technological responsiveness. The students under my supervision will focus on solving problems in artificial intelligence and security in smart grids. The students will have the opportunity to take courses from a variety of disciplines and to collaborate with faculty members from electrical engineering, chemical engineering, mechanical engineering, computer science, materials engineering, economics, and others. The students will also work on joint projects with industries.`,
      },
      affiliation: "Energy Convergence Graduate School (에너지정책융합대학원)",
      skillsRequired: [
        "Machine Learning",
        "Information Security",
        "Computer Networks",
      ],
      programmingSkills: ["Python", "C++"],
      positionsAvailable: { PhD: 1, MSc: 2 },
    },
    {
      title: "Security and Privacy in Autonomous Driving",
      description: {
        kor: `융합보안대학원 설립·운영 지원을 통해 전 산업 분야로 확산되는 보안 위협에 대응할 최고급 연구개발 인력양성을 목표로 합니다. 제 지도를 받는 학생들은 자율주행 환경에 적용될 수 있는 분산형 AI 보안 연구와 개인정보보호 관련 연구를 수행하게 됩니다. 학생들은 정보보안, 시스템보안, 자율주행자동차 시스템, 인공지능, 로봇, 취약성 분석 등의 다양한 분야의 강의를 수강하고 다양한 분야의 교수진과 공동으로 작업할 수 있는 기회를 갖게 됩니다. 학생들은 또한 산업계와 공동 프로젝트를 진행하게 됩니다.`,
        eng: `The graduate program aims to train top-notch research and development personnel to respond to security threats spreading across all industries through this special graduate school program. Under my supervision, students will research distributed AI security and privacy in autonomous driving applications. Students can take courses in various areas, including information security, systems security, autonomous vehicle systems, artificial intelligence, robotics, and vulnerability analysis, and collaborate with faculty from multiple disciplines. Students will also work on joint projects with industry.`,
      },
      affiliation: "Security Convergence Graduate School (융합보안대학원)",
      skillsRequired: [
        "Machine Learning",
        "Information Security",
        "Computer Networks",
      ],
      programmingSkills: ["Python", "C++"],
      positionsAvailable: { PhD: 1, MSc: 2 },
    },
    {
      title: "Privacy Preserving Machine Learning Algorithms and Protocols",
      description: {
        kor: `이 프로젝트는 IoT, 엣지 컴퓨팅, 스마트 그리드 등 다양한 분산 시스템의 특성과 요구 사항을 고려하여 연합 학습의 한계를 탐구하는 것을 목표로 합니다. 학생들은 개인화, 클러스터링, 모듈화, 개인 정보 보호, 모델 압축, 모델 보호 등 연합 학습의 다양한 문제를 해결하기 위한 연구를 수행하게 됩니다.`,
        eng: `This project explores the limitations of federated learning, considering the characteristics and requirements of various distributed systems, such as IoT, edge computing, and smart grids. Students will research various problems in federated learning, including personalization, clustering, modularization, privacy, model compression, model protection, and more.`,
      },
      affiliation: "Computer Science and Engineering (컴퓨터학부)",
      skillsRequired: ["Machine Learning", "Information Security"],
      programmingSkills: ["Python", "C++"],
      positionsAvailable: { PhD: 1, MSc: 2 },
    },
  ];

  return (
    <div className={styles.container}>
      {researchAreas.map((area, index) => (
        <div key={index} className={styles.researchArea}>
          <h2 className={styles.title}>{area.title}</h2>
          <div className={styles.description}>
            <div className={styles.text}>
              <h3>Description (Korean)</h3>
              <p>{area.description.kor}</p>
              <h3>Description (English)</h3>
              <p>{area.description.eng}</p>
            </div>
          </div>
          <p>
            <strong>Affiliation:</strong> {area.affiliation}
          </p>
          <p>
            <strong>Skills Required:</strong> {area.skillsRequired.join(", ")}
          </p>
          <p>
            <strong>Programming Skills:</strong>{" "}
            {area.programmingSkills.join(", ")}
          </p>
          <p>
            <strong>Positions Available:</strong> PhD:{" "}
            {area.positionsAvailable.PhD}, MSc: {area.positionsAvailable.MSc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Recruitment;
