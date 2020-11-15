import React from 'react';

const Card = ({ cargo }) => {
    return (
        <div className="card_item">
            <div className="card_inner">

                <div className="card_name">
                    {cargo.cargo_type}
                </div>
                <div className="card-direction">
                    <p className="card-direction-from">{cargo.from_city}, {cargo.from_region}</p>
                    <p className="card-direction-to">{cargo.to_city}, {cargo.to_region}</p>
                </div>
                <div className="card-main-information">
                    <div className="card-details">
                        <p className="card-date">25.09.2020 - 01.01.2021</p>
                        <p className="card-volume">{cargo.weight}т / {cargo.volume}м³</p>
                    </div>
                    <div className="card-price">{cargo.price}c</div>
                </div>
                <div className="card-line"></div>
                <div className="card-addition-information">
                    <p className="card-period">{new Date(cargo.date_published).getDay()} часов назад</p>
                    <a className="card_addition_btn" href="/">Подробнее</a>
                </div>
            </div>
        </div>
    );
};

export default Card;