import { useActionCreators } from '../../../shared/lib/redux';
import { userActions } from '../../../entities/user';
import { useRef, FormEvent } from 'react';

const Register = (): JSX.Element => {
  const formRef = useRef(null);
  const { loginAction } = useActionCreators(userActions);

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (formRef.current !== null) {
      const formData = new FormData(formRef.current);

      const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      loginAction({ email, password });
    }
  };

  return (
    <form className="login__form form" action="#" method="post" ref={formRef} onSubmit={handleFormSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" type="email" name="email" placeholder="Email" />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input" type="password" name="password" placeholder="Password" />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
};

export default Register;
