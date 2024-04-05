import clsx from 'clsx';
import { useActionCreators } from '../../../shared/lib/redux';
import { userActions } from '../../../entities/user';
import { FormEvent, useState } from 'react';
import { validateEmail, validatePassword } from '../lib/validate-form';
import styles from './styles.module.css';

const Register = (): JSX.Element => {
  const { loginAction } = useActionCreators(userActions);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleEmailChange = ({ target }: { target: HTMLInputElement }) => {
    setEmailValue(target.value);

    if (!validateEmail(target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordChange = ({ target }: { target: HTMLInputElement }) => {
    setPasswordValue(target.value);

    if (!validatePassword(target.value)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    loginAction({ email: emailValue, password: passwordValue });
  };

  const isFormInvalid = emailError || passwordError || !passwordValue || !emailValue;

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <div className={clsx('login__input-wrapper form__input-wrapper', { [styles.wrapper]: emailError })}>
        <label className="visually-hidden">E-mail</label>
        <input
          onChange={(evt) => handleEmailChange(evt)}
          className={clsx('login__input form__input', { [styles.input]: emailError })}
          type="email"
          name="email"
          placeholder="Email"
        />
        {emailError && <span className={styles.text}>E-mail must be correct</span>}
      </div>

      <div className={clsx('login__input-wrapper form__input-wrapper', { [styles.wrapper]: passwordError })}>
        <label className="visually-hidden">Password</label>
        <input
          onChange={(evt) => handlePasswordChange(evt)}
          className={clsx('login__input form__input', { [styles.input]: passwordError })}
          type="password"
          name="password"
          placeholder="Password"
        />
        {passwordError && <span className={styles.text}>Password must consist of at least one digit and one letter</span>}
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={isFormInvalid}
      >
        Sign in
      </button>
    </form>
  );
};

export default Register;
