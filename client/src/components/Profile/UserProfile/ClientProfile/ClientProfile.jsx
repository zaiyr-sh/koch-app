import React from 'react';
import "./ClientProfile.css";
import Preloader from "../../../common/Preloader/Preloader";

const ClientProfile = ({ clientProfile }) => {

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
                                />
                            </div>
                            <div className="client__surname">
                                <input
                                    type="text"
                                    className="client__field"
                                    value={clientProfile.surname}
                                    placeholder="Фамилия"
                                />
                            </div>
                            <div className="client__phoneNumber">
                                <input
                                    type="text"
                                    className="client__field"
                                    value={clientProfile.phone_number}
                                    placeholder="Номер телефона"
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

export default ClientProfile;