import React from 'react';
import {Link, Redirect} from "react-router-dom";
import NumberFormat from 'react-number-format';
import { reduxForm, Field } from 'redux-form';

import "./Login.css";
import styles from "../common/FormsControl/FormsControl.module.css"
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/reducers/auth-reducer";
import {maxLengthThunkCreator, minLengthThunkCreator, required} from "../../utils/validators";

const maxLength30 = maxLengthThunkCreator(30);
const minLength3 = minLengthThunkCreator(3);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className="login__form">
            <div className="login__phoneNumber">
                <Field
                    placeholder="Номер телефона"
                    className="login__field-phoneNumber"
                    type="text"
                    component="input"
                    name="phone_number"
                    // validate={[required]}
                />
                {/*<NumberFormat className="login__field-phoneNumber" format="+996 (###) ###-###" allowEmptyFormatting mask="_"/>*/}
            </div>
            <div className="login__password">
                <Field
                    placeholder="Пароль"
                    className="login__field-password"
                    type="password"
                    component="input"
                    name="password"
                    // validate={[required, minLength3, maxLength30]}
                />
            </div>
            <div className="login__resetPassword">
                <Link className="login__button-resetPassword" to="/reset" >Забыл пароль</Link>
            </div>
            { error &&  <div className={styles.formSummaryError}>{error}</div> }
            <div className="login__buttons">
                <a className="login__button-registration" href="/registration">Регистрация</a>
                <button className="login__button-signin">Войти</button>
            </div>
        </form>
    );
};

const LoginReduxForm  = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = (props) => {

    if(props.isLoggedIn) {
        return <Redirect to="/profile/my_orders"/>
    }

    const onSubmit = (formData) => {
        props.loginThunk(formData.phone_number, formData.password)
    }

    return (
        <section className="section-login">
            <div className="container">
                <div className="login">
                    <div className="login__form">
                        <h2 className="login__title">Войдите в свой аккаунт</h2>
                        <LoginReduxForm onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => ({
    user: state.authPage.user,
    isLoggedIn: state.authPage.isLoggedIn
})

const mapDispatchToProps = (dispatch) => {
    return {
        loginThunk: (phone_number, password) => {
            dispatch(loginThunkCreator(phone_number, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);