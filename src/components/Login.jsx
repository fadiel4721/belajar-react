import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import styles from '../styles/Login.module.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Tanpa validasi, langsung navigasi ke Todo List
    navigate('/todo-list');
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.inputField}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.inputField}
      />
      <button onClick={handleLogin} className={styles.loginButton}>Login</button>
    </div>
  );
}

export default Login;
