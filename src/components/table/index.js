import React from "react";
import styles from "./index.module.scss";

const Table = ({ structure, data }) => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.wrapper__table}>
        <thead>
          <tr>
            {structure.map((header, index) => <th key={index}>{header}</th>)}
          </tr>
        </thead>

        <tbody>
            {
              data.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.id}</td>
                  <td>{entry.firstName}</td>
                  <td>{entry.lastName}</td>
                  <td>{entry.dob}</td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
