import React from 'react';

const Preregistration = ({handleOpenRegistrationSection}) => {
    return (
        <section className="section__login">
            <div className="container">
                <h2 className="login__title">Регистрируюсь как ...</h2>
                <div className="login__preregistration">
                    <button type="button" name="user_type" value="driver"
                            onClick={(e) => handleOpenRegistrationSection(e.target.name, e.target.value)}
                            className="registration__button-driver">Водитель
                    </button>
                    <button type="button" name="user_type" value="client"
                            onClick={(e) => handleOpenRegistrationSection(e.target.name, e.target.value)}
                            className="registration__button-client">Владелец груза
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Preregistration;