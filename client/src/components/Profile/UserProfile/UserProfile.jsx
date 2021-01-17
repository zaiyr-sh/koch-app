import React from 'react';

import "./UserProfile.css";
import Preloader from "../../common/Preloader/Preloader";
import {validatePersonName} from "../../../helpers/validation-helper";

class UserProfile extends React.Component {

    state = {
        nameError: "",
        surnameError: "",
    }

    validate = () => {
        let nameError, surnameError;
        let {name, surname} = this.props.userProfile;

        nameError = validatePersonName(name);
        surnameError = validatePersonName(surname);

        if (nameError || surnameError) {
            this.setState({nameError, surnameError});
            return false;
        }
        return true;
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.validate()) {
            this.props.updateUserProfileHandler();
            this.setState({nameError: "", surnameError: ""});
        }
    }

    render() {
        let {userProfile, editUserProfileHandler} = this.props;
        let {nameError, surnameError} = this.state;

        if (!userProfile) return <Preloader/>

        return (
            <section className="section__client-profile">
                <div className="container">
                    <div className="client__data">
                        <div className="client__inner">
                            <h2 className="client__title">Мои данные</h2>
                            <p className="client__activation-title">{userProfile.checked
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