import React, {Component} from 'react';
import {withAuth} from '../../context/Auth';
import {Route, Redirect} from 'react-router-dom';

class PrivateRoute extends Component {
    // Реализуйте приватный роут.
    // Он должен проверять статус авторизации
    // и перенаправлять пользователя на страницу логина,
    // если тот не авторизован.

    loginPath = '/login';

    render() {
        const {isAuthorized} = this.props;
        return isAuthorized ? <Route {...this.props} /> : <Redirect to={this.loginPath}/>;
    }

}

export default withAuth(PrivateRoute);
