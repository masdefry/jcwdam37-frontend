import styles from './register.module.css';

function RegisterPage() {
  return (
    <>
      <h1>Register Page</h1>
      <input
        type='text'
        placeholder='Type your email'
        style={{ backgroundColor: 'black', color: 'white' }}
      />
      <button className={styles.button}>Register Now!</button>
    </>
  );
}

export default RegisterPage;
