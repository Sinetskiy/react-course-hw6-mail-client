// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, {PureComponent} from 'react';
import {withAuth} from '../../context/Auth';
import styles from './LoginForm.module.css';
import {Redirect} from "react-router-dom";

class LoginForm extends PureComponent {

    state = {email: '', password: ''};

    handleEmailChange = event => {
        this.setState({email: event.target.value});
    };

    handlePasswordChange = event => {
        this.setState({password: event.target.value});
    };

    render() {
        const {email, password} = this.state;
        const {authorize, isAuthorized} = this.props;

        const login = () => {
            authorize(email, password);
        };

        return isAuthorized ? <Redirect to="/app"/>
            : <div className={styles.bg}>
                <div className={styles.form + ' t-form'}>
                    <p><label htmlFor="email"><span className={styles.labelText}>Почта</span></label>
                        <input type="text" name="email" className={styles.input + ' t-input-email'}
                               value={email} onChange={this.handleEmailChange}/></p>
                    <p><label htmlFor="password"><span className={styles.labelText}>Пароль</span></label>
                        <input type="password" name="password" className={styles.input + ' t-input-password'}
                               value={password} onChange={this.handlePasswordChange}/></p>
                    <div className={styles.buttons}>
                        <button className={styles.button + ' t-login'} onClick={login}>Войти</button>
                    </div>
                </div>
            </div>
    }
}

export default withAuth(LoginForm);