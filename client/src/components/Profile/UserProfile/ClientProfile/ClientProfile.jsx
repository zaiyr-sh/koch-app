import React from 'react';
import "./ClientProfile.css";
import Preloader from "../../../common/Preloader/Preloader";

const ClientProfile = ({ clientProfile, editClientProfileHandler, updateClientProfileHandler }) => {

    if (!clientProfile) return <Preloader />

    return (
        <section className="section-clientProfile">
            <div className="container">
                <div className="client__data">
                    <div className="client__inner">
                        <h2 className="client__title">Мои данные</h2>
                        <form className="client__form">
                            <div className="client__name">
                                <input
                                    type="text"
                                    className="client__field"
                                    value={clientProfile.name}
                                    placeholder="Имя"
                                    name="name"
                                    onChange={(e) => editClientProfileHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="client__surname">
                                <input
                                    type="text"
                                    className="client__field"
                                    value={clientProfile.surname}
                                    placeholder="Фамилия"
                                    name="surname"
                                    onChange={(e) => editClientProfileHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="client__phoneNumber">
                                <input
                                    type="text"
                                    className="client__field"
                                    value={clientProfile.phone_number}
                                    placeholder="Номер телефона"
                                    name="phone_number"
                                    onChange={(e) => editClientProfileHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="client__button">
                                <button className="client__saveButton" onClick={updateClientProfileHandler}>Сохранить изменения</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientProfile;