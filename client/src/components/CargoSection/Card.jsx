import React from 'react';

const Card = ({ cargo, onOpenCardModal }) => {
    console.log(cargo)

    return (
        <div className="card__item">
            <div className="card__inner">

                <div className="card__name">
                    {cargo.name}
                </div>
                <div className="card__direction">
                    <p className="card__direction-from">{cargo.from_city}, {cargo.from_region}</p>
                    <p className="card__direction-to">{cargo.to_city}, {cargo.to_region}</p>
                </div>
                <div className="card__main-information">
                    <div className="card__details">
                        <p className="card__date">{new Date(cargo.departure_date).getDate()}.{new Date(cargo.departure_date).getMonth()}.{new Date(cargo.departure_date).getFullYear()}</p>
                        <p className="card__volume">{cargo.weight}т / {cargo.volume}м³</p>
                    </div>
                    <div className="card__price">{cargo.price}c</div>
                </div>
                <div className="card__line"></div>
                <div className="card__addition-information">
                    <p className="card__period">{new Date(cargo.date_published).getDate()}.{new Date(cargo.date_published).getMonth()}.{new Date(cargo.date_published).getFullYear()}, {new Date(cargo.date_published).getHours()} ч. назад</p>
                    <button className="card__addition-btn" onClick={() => onOpenCardModal(cargo)}>Подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default Card;