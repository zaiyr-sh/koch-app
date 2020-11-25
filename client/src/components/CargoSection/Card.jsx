import React from 'react';

const Card = ({ card, onOpenCardModal }) => {

    return (
        <div className="card__item">
            <div className="card__inner">

                <div className="card__name">
                    {card.name}
                </div>
                <div className="card__direction">
                    <p className="card__direction-from">{card.from_city}, {card.from_region}</p>
                    <p className="card__direction-to">{card.to_city}, {card.to_region}</p>
                </div>
                <div className="card__main-information">
                    <div className="card__details">
                        <p className="card__date">{new Date(card.from_shipment_date).getDate()}.{new Date(card.from_shipment_date).getMonth()}.{new Date(card.from_shipment_date).getFullYear()}-{new Date(card.to_shipment_date).getDate()}.{new Date(card.to_shipment_date).getMonth()}.{new Date(card.to_shipment_date).getFullYear()}</p>
                        <p className="card__volume">{card.weight}т / {card.volume}м³</p>
                    </div>
                    <div className="card__price">{card.price}c</div>
                </div>
                <div className="card__line"></div>
                <div className="card__addition-information">
                    <p className="card__period">{new Date(card.date_published).getDate()}.{new Date(card.date_published).getMonth()}.{new Date(card.date_published).getFullYear()}, {new Date(card.date_published).getHours()} ч. назад</p>
                    <button className="card__addition-btn" onClick={() => onOpenCardModal(card)}>Подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default Card;