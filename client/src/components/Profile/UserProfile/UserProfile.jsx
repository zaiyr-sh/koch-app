import React from 'react';

import "./UserProfile.css";
import Preloader from "../../common/Preloader/Preloader";

class UserProfile extends React.Component {

    state = {
        nameError: "",
        surnameError: "",
    }

    validate = () => {
        let nameError = "";
        let surnameError = "";

        let {name, surname} = this.props.userProfile;

        if (/\d/.test(name) || (name.length <= 1)) {
            nameError = "Поле должно быть от 2 и выше символов длиной и не содержать чисел";
        }
        if (/\d/.test(surname) || (surname.length <= 1)) {
            surnameError = "Поле должно быть от 2 и выше символов длиной и не содержать чисел";
        }

        if (nameError || surnameError) {
            this.setState({ nameError, surnameError });
            return false;
        }
        return true;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.props.updateUserProfileHandler();
            this.setState({nameError: "", surnameError: ""});
        }
    }

    render() {
        let {userProfile, editUserProfileHandler} = this.props;
        let {nameError, surnameError} = this.state;

        if (!userProfile) return <Preloader/>

        return (
            <section className="section-clientProfile">
                <div className="container">
                    <div className="client__data">
                        <div className="client__inner">
                            <h2 className="client__title">Мои данные</h2>
                            <p className="client__activation-title">{userProfile.registered
                                ? "Учетная запись активирована администратором"
                                : "Учетная запись не активирована администратором"}
                            </p>
                            <form className="client__form" onSubmit={this.onSubmit}>
                                <div className="client__name">
                                    <input
                                        type="text"
                                        className="client__field"
                                        value={userProfile.name}
                                        placeholder="Имя"
                                        name="name"
                                        onChange={(e) => editUserProfileHandler(e.target.name, e.target.value)}
                                    />
                                    <p className="error__description">
                                        {nameError}
                                    </p>
                                </div>
                                <div className="client__surname">
                                    <input
                                        type="text"
                                        className="client__field"
                                        value={userProfile.surname}
                                        placeholder="Фамилия"
                                        name="surname"
                                        onChange={(e) => editUserProfileHandler(e.target.name, e.target.value)}
                                    />
                                    <p className="error__description">
                                        {surnameError}
                                    </p>
                                </div>
                                <div className="client__button">
                                    <button className="client__saveButton">Сохранить изменения</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default UserProfile;