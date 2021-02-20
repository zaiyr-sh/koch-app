import React from 'react';

import {
    dates_with_leading_zeros,
    hours_with_leading_zeros,
    minutes_with_leading_zeros,
    months_with_leading_zeros
} from "../../helpers/date-helper";

const Card = ({card, onOpenCardModal}) => {

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
                        <p className="card__volume">{card.weight}т</p>
                        <p className="card__date">{hours_with_leading_zeros(new Date(card.from_shipment_date))}.{months_with_leading_zeros(new Date(card.from_shipment_date))}.{new Date(card.from_shipment_date).getFullYear()} - {dates_with_leading_zeros(new Date(card.to_shipment_date))}.{months_with_leading_zeros(new Date(card.to_shipment_date))}.{new Date(card.to_shipment_date).getFullYear()}</p>
                    </div>
                    <div className="card__price">{card.price}c</div>
                </div>
                <div className="card__line"/>
                <div className="card__addition-information">
                    <p className="card__period">{dates_with_leading_zeros(new Date(card.date_published))}.{months_with_leading_zeros(new Date(card.date_published))}.{new Date(card.date_published).getFullYear()},
                        в {hours_with_leading_zeros(new Date(card.date_published))}:{minutes_with_leading_zeros(new Date(card.date_published))} ч.</p>
                    <button className="card__addition-btn" onClick={() => onOpenCardModal(card)}>Подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default Card;