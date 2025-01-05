import css from './LoginForm.module.css';
const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const { login, password } = form.elements;

    console.log(login, password);

    console.log(login.value, password.value);

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
