import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Homepage.module.css'; // Import CSS module

export default function Homepage() {
    return (
        <div className={styles.homepageContainer}>
            <h1>Homepage</h1>
            <p>Selamat datang di halaman utama!</p>
            <Link to="/login">
                <button>Login</button>
            </Link>
        </div>
    );
}
