import React, { useState, useEffect } from "react";
import researchData from "./researchData.json";
import styles from "./Research.module.css";

const Research = () => {
  const [selectedType, setSelectedType] = useState("AI");
  const [filteredData, setFilteredData] = useState([]);

  const researchTypes = ["AI", "ML", "DL", "IoT", "CV", "NLP"];

  useEffect(() => {
    filterData(selectedType);
  }, [selectedType]);

  const filterData = (type) => {
    const data = researchData.filter((item) => item.research_type === type);
    const sortedData = data.sort((a, b) => b.year - a.year);
    setFilteredData(sortedData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {researchTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={selectedType === type ? styles.active : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <div className={styles.tableContainer}>
        <h1>{selectedType} Publications</h1>
        <div className={styles.section}>
          <h2>Journals</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Year</th>
                <th>Publication</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData
                .filter((item) => item.ENTRYTYPE === "article")
                .map((item) => (
                  <tr key={item.ID}>
                    <td>{item.year}</td>
                    <td>
                      {item.title}
                      {item.author}
                      {item.year}
                      {item.journal}
                    </td>
                    <td>
                      {" "}
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className={styles.section}>
          <h2>Conferences</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Authors</th>
                <th>Year</th>
                <th>Conference</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData
                .filter((item) => item.ENTRYTYPE === "conference")
                .map((item) => (
                  <tr key={item.ID}>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>{item.year}</td>
                    <td>{item.journal}</td>
                    <td>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Research;
