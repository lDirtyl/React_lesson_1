import css from './LoginForm.module.css';

// const LoginForm = () => {
//   const handleSubmit = evt => {
//     evt.preventDefault();
//     console.log(evt);
//   };

//   return (
//     <form onSubmit={handleSubmit} className={css.form}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Log in</button>
//     </form>
//   );
// };

// const LoginForm = () => {
//   const handleSubmit = evt => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = form.elements;

//     // Посилання на DOM-елементи
//     console.log(login, password);

//     // Значення полів
//     console.log(login.value, password.value);

//     // Скидаємо значення полів після відправки
//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

const LoginForm = ({ onLogin }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    // Викликаємо пропс onLogin
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
