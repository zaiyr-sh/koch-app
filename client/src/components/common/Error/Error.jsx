import React from 'react';
import {Link} from "react-router-dom";

import './Error.css';

const Error = () => {
    return (
        <section className="section__error">
            <div className="container">
                <div className="error__template">
                    <h1>
                        Упс!</h1>
                    <h2>
                        Ошибка 404</h2>
                    <div className="error-details">
                        Извините, но данная Страница не найдена или не доступна!
                    </div>
                    <div className="error__actions">
                        <Link to="/" className="nav__link-placeAd">
                            Вернуться на главную</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Error;