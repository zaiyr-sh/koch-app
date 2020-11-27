import React from 'react';

import "./UserProfile.css";
import Preloader from "../../common/Preloader/Preloader";

const UserProfile = ({ userProfile, editUserProfileHandler, updateUserProfileHandler }) => {

    if (!userProfile) return <Preloader />

    const onSubmit = (e) => {
        e.preventDefault();
        updateUserProfileHandler();
    }

    return (
        <section className="section-clientProfile">
            <div className="container">
                <div className="client__data">
                    <div className="client__inner">
                        <h2 className="client__title">Мои данные</h2>
                        <form className="client__form" onSubmit={onSubmit}>
                            <div className="client__name">
                                <input
                                    type="text"
                                    className="client__field"
                                    value={userProfile.name}
                                    placeholder="Имя"
                                    name="name"
                                    onChange={(e) => editUserProfileHandler(e.target.name, e.target.value)}
                                />
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
};

export default UserProfile;