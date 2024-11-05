import React from 'react';
import styles from '../styles/Completed.module.css'; // Import CSS module

function Completed() {
  return (
    <div className={styles.completedContainer}>
      <h2>Studi Kasus Selesai</h2>
      <p>Terima kasih telah menyelesaikan studi kasus ini!</p>
    </div>
  );
}

export default Completed;
